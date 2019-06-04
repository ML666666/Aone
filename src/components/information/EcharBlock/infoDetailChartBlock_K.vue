<template>
<div>
  <div class="changeEchartbar">
    <div class="changeEchartbarItemWrapper">
      <div @click="index = 0" class="changeEchartbarItem active">1d</div>
      <div @click="index = 1" class="changeEchartbarItem">1w</div>
      <div @click="index = 2"class="changeEchartbarItem">1mon</div>
      <div @click="index = 3"class="changeEchartbarItem">all</div>
    </div>
    <div id="canvasWrapper">
      <v-touch  v-on:panstart="panStart" v-on:panend="panEnd"><oneday v-if="index == 0" :type="type"></oneday></v-touch>
      <v-touch  v-on:panstart="panStart" v-on:panend="panEnd"><oneWeek  v-if="index == 1" :type="type"></oneWeek></v-touch>
      <v-touch  v-on:panstart="panStart" v-on:panend="panEnd"><oneMonth  v-if="index == 2" :type="type"></oneMonth></v-touch>
      <v-touch  v-on:panstart="panStart" v-on:panend="panEnd"><oneAll  v-if="index == 3" :type="type"></oneAll></v-touch>
    </div>
  </div>
</div>
</template>

<script>
    import oneday from './chartBlock_k_Wrapper/chartBlock_k_1d'
    import oneWeek from './chartBlock_k_Wrapper/chartBlock_k_1w'
    import oneMonth from './chartBlock_k_Wrapper/chartBlock_k_1m'
    import oneAll from './chartBlock_k_Wrapper/chartBlock_k_1All'
    let ws = null;
    export default {
        name: "info-chart-block",
        components:{
          oneday,
          oneWeek,
          oneMonth,
          oneAll
        },
        data:function () {
          return{
            index:0
          }
        },
        methods:{
          panStart:function () {
          },
          panEnd:function () {
          }
        },
        mounted:function () {
          $('.changeEchartbarItem').click(function () {
            $('.changeEchartbarItem').removeClass('active');
            $(this).addClass('active');
          })
          var _this = this;
          ws = new WebSocket('wss://t9.senhet.com:8890');
          ws.onopen = () => {
            var status = "search_kdata HT"+this.type.toLowerCase()+"cny 5";
            ws.send(status)
          }
          ws.onmessage = evt => {

          }
          ws.onclose = function () {
          }
        },
        beforeDestroy:function () {
          ws.close();
         },
        props: ['type'],
    }
</script>

<style scoped>
.changeEchartbar{
  height: 2.571rem;
  background:rgba(40,40,40,0.4);
}
.changeEchartbarItemWrapper{
  height: 2.571em;
  width: 100%;
  float: left;
}
.changeEchartbarItem{
  display: inline-block;
  width: 25%;
  float: left;
  color: #fff;
  line-height: 2.571rem;
  font-size: 0.785rem;
}
.changeEchartbarItemWrapper .active{
  color: RGBA(26, 121, 255, 1);
}
.changeEchartbar #canvasWrapper{
  height: 16rem;
  width: 100%;
  overflow: hidden;
  -webkit-transform: translateY(1rem);
  transform: translateY(1rem);
}
</style>
