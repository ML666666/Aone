
<template>
  <div id="MainApp">
    <!--<vue-scroll>-->
    <div id="app" class="app">
      <transition :name="changeType"  mode="out-in">
        <router-view/>
      </transition>
      <div class="toTop">
      </div>

      <transition :name="changeType"  mode="out-in">
      <div v-if="toGetEduStep" class="eduMask">
        <transition :name="changeType"  mode="out-in">
          <step_1 v-if="toGetEduStep == 1"></step_1>
          <step_2 v-if="toGetEduStep == 2"></step_2>
          <step_3 v-if="toGetEduStep == 3"></step_3>
          <step_4 v-if="toGetEduStep == 4"></step_4>
          <step_5 v-if="toGetEduStep == 5"></step_5>
          <step_6 v-if="toGetEduStep == 6"></step_6>
        </transition>
      </div>
      </transition>

    </div>
      <div v-if="language" class="bottomBar" v-show="$router.isBottomShow">
        <!--<span style="color: #fff">{{$route.name}}</span>-->
        <div v-bind:class="{ 'link-active': $router.nowPage == 'market' }" class="bottomBarItem market"  @click="toMarket">
          <div class="TopSplitBlock"></div>
          <div class="SplitBlock"></div>
          <span class="IconSpan">
            <template>{{language.appBar.information}}</template>
          </span>
        </div>
        <div v-bind:class="{ 'link-active': $router.nowPage == 'exchange' }" class="bottomBarItem exchange"  @click="toExchange">
          <div class="TopSplitBlock"></div>
          <div class="SplitBlock"></div>
          <span class="IconSpan">
            <template>{{language.appBar.exchange}}</template>
          </span>
        </div>
        <div v-bind:class="{ 'link-active': $router.nowPage == 'information' ||  $router.nowPage == 'default' }" class="bottomBarItem information" id="oneItem"  @click="toInformation">
          <div class="TopSplitBlock"></div>
          <div class="SplitBlock"></div>
          <span class="IconSpan">
            <template>{{language.appBar.market}}</template>
          </span>
        </div>
        <div v-bind:class="{ 'link-active': $router.nowPage == 'BTC' || $router.nowPage == 'LTC' || $router.nowPage == 'ETH' }" class="bottomBarItem trading"  @click="toTrading">
          <div class="TopSplitBlock"></div>
          <div class="SplitBlock"></div>
          <span class="IconSpan">
            <template>C2C</template>
          </span>
        </div>
        <div v-bind:class="{ 'link-active': $router.nowPage == 'members' }"  class="bottomBarItem members" @click="toMembers">
          <div class="TopSplitBlock"></div>
          <div class="SplitBlock"></div>
          <span class="IconSpan">
          <template>{{language.appBar.MemberCenter}}</template>
        </span>
        </div>
      </div>
    <!--</vue-scroll>-->
  </div>
</template>

<script>
  import step_1 from './components/eduMask/step_1'
  import step_2 from './components/eduMask/step_2'
  import step_3 from './components/eduMask/step_3'
  import step_4 from './components/eduMask/step_4'
  import step_5 from './components/eduMask/step_5'
  import step_6 from './components/eduMask/step_6'
  export default {
  name: 'App',
  components:{
    step_1,
    step_2,
    step_3,
    step_4,
    step_5,
    step_6
  },
  beforeCreate:function () {
    if(!localStorage.getItem('isFristToAOne')){
      this.$router.push({ name: 'education'});
      this.$store.commit('aboutAone');
      localStorage.setItem('isFristToAOne',1);
    }
    this.$store.commit('SetLanguage');
  },
  mounted:function () {

    var startY,endY;
    $('body').on('touchstart',function (e) {
      startY = e.touches[0].pageY;
    });
    $('body').on('touchmove',function (e) {
      endY = e.touches[0].pageY;  //记录手指触摸的移动中的坐标
      if(endY>startY&& $(window).scrollTop()<=0){
        e.preventDefault();
      }
      if(endY<startY&& $(window).scrollTop()+
        $(window).height()>=$('body')[0].scrollHeight){
        e.preventDefault();
      }
    })

   $('.app').css('width',$(window).width());
   $('.eduMask').css('height',$(window).height());
   $(window).resize(function () {
     $('.app').css('width',$(window).width());
     $('.eduMask').css('height',$(window).height());
   })

    //回到顶部
    $('.toTop').click(function () {
      $("html,body").animate({scrollTop:0}, 500);
    })


    var windowHeight = $(window).height();
    $(window).scroll(function () {
      if($(document).scrollTop()>windowHeight){
        $('.toTop').fadeIn();
      }else{
        $('.toTop').fadeOut();
      }
    });
  },
  data:function () {
    return{
      changeType:'vux-pop-nor',
    }
  },
  computed:{
    toGetEduStep:function () {
      return this.$store.getters.getEduStep
    },
    language:function () {
      return this.$store.getters.getLanguage;
    },
  },
  watch:{
    toGetEduStep:function (val,oldval) {
      if(val){
        if(val == 1){
          this.$router.push({ name: 'education'});
        }else if(val == 2){
          this.$router.push({ name: 'information'});
        }else if(val == 3){
          this.$router.push({ name: 'market'});
        }else{
          this.$router.push({ name: 'BTC'})
        }
        $('html').css('overflow','hidden');
      }else{
        $('html').css('overflow','scroll');
      }
    }
  },
  methods:{
    toTrading:function () {
      if(this.$route.name != 'trading'){
        this.$router.push({ name: 'BTC'})
      }
    },
    toMarket:function () {
      this.$router.push({ name: 'market'});
    },
    toInformation:function () {
      this.$router.push({ name: 'information'});
    },
    toExchange:function () {
       this.$router.push({ name: 'exchange'});
    },
    toMembers:function () {
       this.$router.push({ name: 'members'});
    }
  }
}
</script>

<style>

  input[type="button"], input[type="submit"], input[type="reset"] {
    -webkit-appearance: none;
  }
  textarea {  -webkit-appearance: none;}
  #app {
  max-width: 26.7857rem;
  overflow-x:hidden ;
  margin: 0 auto;
  min-height: 47.64285rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  }
  #app .eduMask *{
    font-family:myFirstFont;
    color: #fff;
  }
  #app .eduMask{
    min-height: 47.64285rem;
    position: absolute;
    width: 100%;
    z-index: 5000;
    top: 0px;
    left: 0px;
    background: RGBA(8, 8, 8, 0.75);
  }
  @font-face
  {
    font-family: myFirstFont;
    src: url('./assets/HYShiGuangTiW.ttf')
  }

  input{
  -webkit-appearance: none;
}
.router-link-active .TopSplitBlock{
	position: absolute;
	top: 0px;
	height: 1px;
	left: 0px;
	width: 100%;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
}

.SplitBlock{
	position: absolute;
  height: 3.5rem;
  right: 0px;
  width: 1px;
  background: transparent;
}
.router-link-active .trading .SplitBlock{
  box-shadow: 0px 0px 5px rgba(126,125,125,0.5);
}
.router-link-active .members .SplitBlock{
  left: 0px;
  box-shadow: 0px 0px 5px rgba(126,125,125,0.5);
}
body{
	background:RGBA(8, 8, 8, 1);
}
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background: transparent !important;
    color: rgba(255,255,255,0.6) !important;
 }
.bottomBar{
  width:26.7857rem;
	height: 3.5rem;
	position: fixed;
	bottom: 0px;
	background:#080808;
  border-top:1px solid rgba(255,255,255,0.55);
  z-index: 300;
  left: 50%;
  transform: translateX(-50%);
}
  .toTop{
    background: url(assets/barIcon/toTop.png) no-repeat center center;
    background-size: cover;
    position: fixed;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    bottom: 5.5rem;
    right: 2rem;
    display: none;
  }
.bottomBarItem{
	display: inline-block;
	float: left;
	width: 20%;
	height: 100%;
	text-align: center;
	font-size: 0.82142857rem;
	color:#fff;
  position: relative;
}
.bottomBarItem .IconSpan{
	display: block;
  text-align: center;
  font-size: 0.85714rem;
  padding-top: 1.985rem;
}


.information .IconSpan{
  background: url(assets/barIcon/information.png) no-repeat center 0.428rem;
  background-size: 1.32rem;
}
.market .IconSpan{
  background: url(assets/barIcon/market.png) no-repeat center 0.428rem;
  background-size: 1.32rem;
}
.trading .IconSpan{
  background: url(assets/barIcon/game.png) no-repeat center 0.428rem;
  background-size: 1.32rem;
}
.exchange .IconSpan{
  background: url(assets/barIcon/exchange.png) no-repeat center 0.428rem;
  background-size: 1.32rem;
}
.members .IconSpan{
  background: url(assets/barIcon/center.png) no-repeat center 0.428rem;
  background-size: 1.32rem;
}


.link-active:nth-child(1)  .IconSpan{
  background: url(assets/barIcon/marketActive.png) no-repeat center 0.428rem;
	background-size: 1.32rem;
	color: #1A79FF;
}
.link-active:nth-child(2)  .IconSpan{
    background: url(assets/barIcon/exchangeActive.png) no-repeat center 0.428rem;
    background-size: 1.32rem;
    color: #1A79FF;
}
.link-active:nth-child(3)  .IconSpan{
  background: url(assets/barIcon/informationActive.png) no-repeat center 0.428rem;
	background-size: 1.32rem;
	color: #1A79FF;
}
.link-active:nth-child(4)  .IconSpan{
  background: url(assets/barIcon/gameActive.png) no-repeat center 0.428rem;
  background-size: 1.32rem;
  color: #1A79FF;
}
.link-active:nth-child(5)  .IconSpan{
  background: url(assets/barIcon/centerActive.png) no-repeat center 0.428rem;
  background-size: 1.32rem;
  color: #1A79FF;
}

.vux-pop-in-enter-active,
.vux-pop-in-leave-active,
.vux-up-out-enter-active,
.vux-up-out-leave-active,
.vux-pop-nor-enter-active,
.vux-pop-nor-leave-active,
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 250ms;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%,0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%,0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%,0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%,0, 0);
}

.vux-up-out-enter {
  transform: translate3d(0,-100%, 0);
}

.vux-up-out-leave-active {
  transform: translate3d(0, 100%, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%,0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%,0, 0);
}

.vux-pop-nor-enter {
  will-change: transform;
  opacity: 0;
}

.vux-pop-nor-leave-active {
  will-change: transform;
  opacity: 0;
}

</style>
