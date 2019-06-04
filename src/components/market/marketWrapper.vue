<template>
  <div style="padding-bottom: 4rem">
    <div class="edcTitleBar">
      <div @click="isVideoShow=true" v-bind:class="{'heightLight':isVideoShow}" class="edcTitleBarItem">
        <p>{{language.news}}</p>
        <span></span>
      </div>
      <div @click="isVideoShow=false" v-bind:class="{'heightLight':!isVideoShow}" class="edcTitleBarItem">
        <p>{{language.interpretation}}</p>
        <span v-if="index == 1" style="width: 7.85rem"></span>     <!--英文-->
        <span v-else></span>
      </div>
    </div>
    <template v-if="isVideoShow">
      <market></market>
    </template>
    <template v-else>
      <Interpretation></Interpretation>
    </template>
  </div>
</template>

<script>
    import market from './marketComponents/market'
    import Interpretation from './marketComponents/Interpretation'
    export default {
        name: "market-wrapper",
        components:{
          market,
          Interpretation
        },
        data:function () {
          return{
            isVideoShow:true,
            index:localStorage.getItem('languageIndex'),
          }
        },
        computed:{
          language:function () {
            return this.$store.getters.getLanguage.aboutMe
          }
        }
    }
</script>

<style scoped>
  .edcTitleBar{
    height: 3.03rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background: RGBA(16, 16, 16, 1);
    z-index: 100;
  }
  .edcTitleBar div{
    position: relative;
    display: inline-block;
    width: 50%;
    height: 3.03rem;
    float: left;
    line-height: 3.03rem;
    font-size: 1.071rem;
    color: #fff;
  }
  .edcTitleBar div p{
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 99;
  }
  .edcTitleBar .heightLight span{
    display: block;
    position: absolute;
    width: 3.28571rem;
    height: 0.428rem;
    background:RGBA(26, 121, 255, 1);
    left: 50%;
    transform: translateX(-50%) skew(30deg,0deg);
    top: 1.55rem;
  }
</style>
