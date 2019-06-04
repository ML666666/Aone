<template>
<div class="step_2Wrapper">
  <div style="margin-bottom: 7.214rem;margin-top: 8rem">
  <close></close>
  </div>
   <div class="step_2">
     <div class="infoListItem">
       <img src="../../assets/info/BTC.png" /><span style="font-size: 0.926rem; float: left">BTC</span>
       <span  class="price">¥55264.22</span>
       <span class="isUp up">
         <template>+</template>0.05%
       </span>
     </div>
     <div class="about">{{language_2.turnover}}（24h) 65.92{{language_2.ten_thousand}} BTC </div>
   </div>
   <img class="step_2img" src="../../assets/eduMask/step_2.png"/>
   <p>{{language.step_2Tips}}</p>
   <makeSure></makeSure>

</div>
</template>

<script>
   import close from './close'
   import makeSure from './makeSure'
    export default {
        name: "step_1",
        computed:{
          language_2:function () {
            return this.$store.getters.getLanguage.infoPageDetail;
          },
          language:function () {
            return this.$store.getters.getLanguage.aboutMe
          },
        },
        components:{
          makeSure,
          close
        }
    }
</script>

<style scoped>
.step_2{
  width:25.285rem;
  height:5.85714rem;
  border:1px solid rgba(255,255,255,1);
  border-radius: 51%;
  margin: 0 auto;
  padding: 0 2.14rem;
  background: RGBA(9, 9, 9, 1);
}
.step_2 *{
  font-family: "微软雅黑" !important;
}
.step_2Wrapper .infoListItem{
  margin-top: 1.5rem;
  height: 1.428rem;
}
.step_2Wrapper .infoListItem img{
  width: 1.428rem;
  height: 1.428rem;
  float: left;
  margin-right: 0.428rem;
}
.step_2Wrapper .infoListItem *{
  float: left;
  font-size: 0.928rem;
  line-height: 1.285rem;
}

.step_2Wrapper .price{
  margin-left: 4.857rem;
  margin-right: 4.07142rem
}
.step_2Wrapper .isUp{
  color: RGBA(254, 123, 131, 1) !important;
}
.step_2Wrapper .step_2img{
  display: block;
  width:3.5rem;
  height:5rem;
  margin-left: 8.785rem;
  margin-top: 0.571rem;
  margin-bottom: 0.85714rem;
}
.step_2Wrapper .about{
  text-align: left;
  margin-top: 0.514rem;
}
.step_2Wrapper p{
  width:18.857rem;
  text-align: left;
  font-size: 1.571rem;
  margin: 0 auto;
  margin-bottom: 5.7142rem;
}
</style>
