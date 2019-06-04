<template>
  <div style="display: none" class="tradingMask animated bounceIn" >
    <div class="MakeSureTrading">
      <div class="MakeSureTradingTop">
        <template>{{language.changeLanguage.title}}</template>
        <img @click="hide"  src="../../assets/commentImg/closeIcon.png" />
      </div>
      <div class="MakeSureTradingTopBody">
        <div class="setLanguage"  @click="setLanguage(0)">
          简体中文
          <div class="radius"><div class="innert"></div></div>
        </div>
        <div class="setLanguage"  @click="setLanguage(1)">
          EN
          <div class="radius"><div class="innert"></div></div>
        </div>
        <div class="setLanguage"  @click="setLanguage(2)">
          繁體中文
          <div class="radius"><div class="innert"></div></div>
        </div>
        <div class="setLanguage"  @click="setLanguage(3)">
          日本语
          <div class="radius"><div class="innert"></div></div>
        </div>
      </div>
      <div  class="MakeSureTradingButtom" @click="changeLanguage">
        <template>{{language.changeLanguage.Sava}}</template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      isChinese:function () {
        return this.$store.getters.getIsChinese
      }
    },
    mounted:function () {
        var index  = localStorage.getItem('languageIndex');
        $('.setLanguage').removeClass('active');
        $('.setLanguage').eq(index).addClass('active');

    },
    data:function () {
      return{
        LanguageType:this.isChinese?"0":"1"
      }
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage
      }
    },
    methods:{
      setLanguage:function (index) {
        $('.setLanguage').removeClass('active');
        $('.setLanguage').eq(index).addClass('active');
        this.LanguageType = index;
      },
      hide:function () {
        $('.tradingMask').hide();
        $('html').css('overflow','scroll');
      },
      changeLanguage:function () {
        $('.tradingMask').hide();
        $('html').css('overflow','scroll');
        console.log(this.LanguageType)
        this.$store.dispatch('actionsSetLanguage',this.LanguageType)
      },
      Login:function () {
        this.$router.push('trading');
      }
    }
  }
</script>

<style scoped>
  .tradingMask{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background:rgba(0,0,0,0.85);
    z-index: 1000;
  }
  .tradingMask .MakeSureTrading{
    width: 20rem;
    height: 26.285rem;
    background: rgba(255,255,255,1);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -13.1rem;
    margin-left: -10rem;
  }
  .MakeSureTradingButtom{
    width: 9.85rem;
    background:linear-gradient(360deg,rgba(26,121,255,1),rgba(156,196,251,1));
    border-radius:36px;
    text-align: center;
    line-height: 2.14rem;
    margin: 0 auto;
    height: 2.14rem;
    margin-top: 2.0rem;
    color: #fff;
  }
  .tradingMask .MakeSureTrading .MakeSureTradingTop{
    width: 20rem;
    height:3.42rem;
    position: relative;
    font-size: 1rem;
    line-height: 3.42rem;
    color: #fff;
    background:RGBA(41, 46, 50, 1);
  }
  .MakeSureTradingTop img{
    position: absolute;
    top:1.7rem !important;
    right: 1.071rem;
    width: 1rem;
    height: auto;
    transform: translateY(-50%);
  }
  .MakeSureTradingTopBody{
    padding-left: 1.428rem;
    padding-right: 1.428rem;
  }
  .MakeSureTradingTopBody .setLanguage{
    height: 4rem;
    border-bottom: 1px solid RGBA(243, 241, 241, 1);
    text-align: left;
    line-height: 4rem;
    position: relative;
  }
  .MakeSureTradingTopBody .setLanguage .radius{
    width: 1rem;
    height:1rem;
    border-radius: 50%;
    border: 1px solid RGBA(151, 151, 151, 1);
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
  }
  .MakeSureTradingTopBody .setLanguage .radius .innert{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.6rem;
    height: 0.6rem;
    transform: translate(-50%,-50%);
    background: RGBA(151, 151, 151, 0);
    border-radius: 50%;
  }
  .MakeSureTradingTopBody .active .radius{
    border:1px solid RGBA(26, 121, 255, 1);
  }
  .MakeSureTradingTopBody .active .radius .innert{
    background: RGBA(26, 121, 255, 1);
  }
  .MakeSureTradingTopBody .setLanguage:last-child{
    border:none;
  }
</style>
