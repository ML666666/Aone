<template>
<div class="step_5Wrpper">
  <div style="margin-bottom: 7.214rem;;margin-top: 13rem">
    <close></close>
  </div>
  <p>{{language.step_5Tips}}</p>
  <div class="step_5">
    <img src="../../assets/eduMask/step_5.png" height="144" width="195"/>
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
.step_5{
  width:13.5714rem;
  height:6.5714rem;
  margin-left: 12.928rem;
  margin-bottom: 1.428rem;
  background:RGBA(6, 6, 6, 1)  url("../../assets/eduMask/step_5Bg.png") no-repeat center center;
  background-size: cover;
  position: relative;
  border-radius: 51%;
}
.step_5 img{
  position: absolute;
  width: 2.928rem;
  height: 5.3571rem;
  top: -2.947rem;
  left: -3.5rem;
}
.step_5Wrpper p{
  font-size: 1.57142rem;
  line-height: 1.96428rem;
  text-align: left;
  width: 23.5rem;
  margin: 0 auto;
  height: 3.5rem;
  margin-bottom: 3.714rem;
}
</style>
