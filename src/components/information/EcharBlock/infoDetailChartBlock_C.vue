<template>
  <div>
    <div class="changeEchartbar">
      <div class="changeEchartbarItemWrapper">
        <div @click="index = 0" class="changeEchartbarItem active">15m</div>
        <div @click="index = 1" class="changeEchartbarItem">1h</div>
        <div @click="index = 2" class="changeEchartbarItem">4h</div>
        <div @click="index = 3" class="changeEchartbarItem">1d</div>
        <div @click="index = 4" class="changeEchartbarItem">5d</div>
      </div>
      <div id="canvasWrapper">
        <one15 v-if="index == 0" :type="type"></one15>
        <oneH  v-if="index == 1" :type="type"></oneH>
        <oneDay v-if="index == 3" :type="type"></oneDay>
      </div>
    </div>
  </div>
</template>

<script>
  import one15 from './chartBlock_C_Wrapper/chartBlock_C_15'
  import oneH from './chartBlock_C_Wrapper/chartBlock_C_1H'
  import oneDay from './chartBlock_C_Wrapper/chartBlock_C_1d'
  let ws = null;
  export default {
    components:{
      one15,
      oneH,
      oneDay
    },
    name: "info-chart-block",
    mounted:function () {
      $('.changeEchartbarItem').click(function () {
        $('.changeEchartbarItem').removeClass('active');
        $(this).addClass('active');
      })
    },
    data:function () {
      return{
        index:0
      }
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
    width: 21.607rem;
    float: right;
  }
  .changeEchartbarItem{
    display: inline-block;
    width: 20%;
    float: left;
    color: #fff;
    line-height: 2.571rem;
    font-size: 0.785rem;
  }
  .changeEchartbarItemWrapper .active{
    color: RGBA(26, 121, 255, 1);
  }
  .changeEchartbar #canvasWrapper{
    height: 15rem;
    width: 100%;
    overflow: hidden;
    transform: translateY(1rem);
  }
</style>
