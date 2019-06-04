<template>
<div class="step_4Wrpper">
   <div class="step_4">
      <span>
        <img src="../../assets/members/BTC.png" height="90" width="90"/>BTC
     </span>
     <span style="margin: 0px 5.15rem;">
       <img src="../../assets/members/LTC.png" height="90" width="90"/>LTC
     </span>
     <span>
       <img src="../../assets/members/ETH.png" height="90" width="90"/>ETH
     </span>
   </div>
   <img class="step_4img" src="../../assets/eduMask/step_4.png"/>
    <p>{{language.step_4Tips}}</p>
  <makeSure></makeSure>
  <div style="margin: 0 auto;margin-top: 5.285rem">
    <close></close>
  </div>
</div>
</template>

<script>
  import close from './close'
  import makeSure from './makeSure'
  export default {
    name: "step_1",
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
.step_4Wrpper .step_4{
  width:24.714rem;
  height:3.571rem;
  border:1px solid rgba(255,255,255,1);
  margin: 0 auto;
  margin-top: 2.571rem;
  margin-bottom: 0.5rem;
  border-radius: 51%;
  padding-left: 1.071rem;
  padding-right: 1.071rem;
  padding-top: 1.285rem;
  background: RGBA(6, 6, 6, 1);
}
.step_4img{
  display: block;
  width:6.28rem;
  height:12rem;
  margin-left: 5rem;
  margin-bottom: 0.857rem;
}
.step_4Wrpper p{
  font-size: 1.57142rem;
  line-height: 1.96428rem;
  text-align: left;
  width: 23.5rem;
  margin: 0 auto;
  margin-bottom: 5.714rem;
}
.step_4 span{
  display: inline-block;
  float: left;
  text-align: left;
  font-family: "微软雅黑" !important;
  font-size: 1.071rem;
  transform: translateY(-25%);
  line-height: 1.42857rem;;
}
.step_4 img{
  width: 1.42857rem;
  height: auto;
  margin-right: 0.571rem;
}
</style>
