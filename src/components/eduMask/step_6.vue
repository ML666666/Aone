<template>
<div class="step_6Wrpper">
  <div style="margin-bottom: 7.214rem;margin-top: 8rem">
    <close></close>
  </div>
  <p>{{language.step_6Tips}}</p>
  <img src="../../assets/eduMask/step_6.png" height="144" width="195"/>
  <div class="step_6">
    <div class="item">2{{language.hand}}</div>
    <div class="item">20{{language.hand}}</div>
    <div class="item">50{{language.hand}}</div>
    <div class="item" style="border-color: rgb(112, 176, 246)
;">{{language.custom}}</div>
  </div>
  <makeSure></makeSure>
</div>
</template>

<script>
  import close from './close'
  import makeSure from './makeSure'
  export default {
    name: "step_5",
    components:{
      makeSure,
      close
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage.aboutMe
      },
    },
  }
</script>

<style scoped>
.step_6{
  width:13.357rem;
  height:8.571rem;
  border:1px solid rgba(255,255,255,1);
  border-radius: 55%;
  margin-left: 0.3rem;
  padding: 1.428rem;
  background: RGBA(6, 6, 6, 1);
  margin-bottom: 1rem;
}
.step_6 .item{
  width: 4.28rem;
  height: 2.14rem;
  display: inline-block;
  line-height: 2.14rem;
  text-align: center;
  border-radius: 30px;
  border: 1px solid RGBA(216, 216, 216, 1);
  color: RGBA(216, 216, 216, 1);
  margin-bottom: 1.428rem;
  background: transparent;
  font-family: "微软雅黑" !important;
}
.step_6Wrpper img{
  width: 3.214rem;
  height: 3.357rem;
  transform: rotate(-466deg);
  /*margin-left: 10.321rem;*/
}
.step_6Wrpper p{
  font-size: 1.57142rem;
  line-height: 1.96428rem;
  text-align: left;
  width: 23.5rem;
  margin: 0 auto;
  height: 5.5rem;
  margin-bottom: 1.714rem;
}
</style>
