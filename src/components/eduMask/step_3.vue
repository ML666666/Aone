<template>
  <div class="step_1Wrapper">
    <div class="step_1">
      <span>{{language.news}}</span>
      <span>{{language.interpretation}}</span>
    </div>
    <img src="../../assets/eduMask/step_1.png" height="507" width="267"/>
    <p>{{language.step_3Tips}}</p>
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
    name: "step_3",
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

  .step_1{
    width:18.71rem;
    height:3rem;
    border:1px solid rgba(255,255,255,1);
    margin: 0 auto;
    margin-top: 0.5714rem;
    border-radius: 51%;
    padding: 0 1.571rem;
    background: RGBA(10, 10, 10, 1);
    font-family: "微软雅黑";
  }
  .step_1 span{
    font-size: 1.0714rem;
    display: inline-block;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.57rem;
    float: left;
  }
  .step_1 span:last-child{
    float: right;
  }
  .step_1Wrapper img{
    display: block;
    width: 5.28rem;
    height: auto;
    margin-top: 0.53rem;
    margin-left: 8.107rem;
  }
  .step_1Wrapper p{
    font-size: 1.57142rem;
    line-height: 1.96428rem;
    text-align: left;
    width: 23.5rem;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 5.714rem;
  }
</style>
