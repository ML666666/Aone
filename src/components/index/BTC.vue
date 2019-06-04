<template>
  <div class="tradingPage">
    <tradingHeader :handNumber="hand"></tradingHeader>
    <EcBlock></EcBlock>

    <div class="choiceGroundWrapper">
      <div class="choiceItemGround">
        <div class="choiceCol">
          <div class="hasHand choiceItem"  v-bind:class="{'active':hand == 2}">2{{language.hand}}</div>
          <div class="hasHand choiceItem"  v-bind:class="{'active':hand == 20}">20{{language.hand}}</div>
        </div>
        <div class="choiceCol">
          <div class="hasHand choiceItem"  v-bind:class="{'active':hand == 50}">50{{language.hand}}</div>
          <input v-model="CustomizeHand" v-bind:class="{'active':hand >= 52}"  @change="onValuesChange"  type="text" :placeholder="language.Customize" class="choiceItem">
          </input>
        </div>
      </div>

      <div class="choiceButtonGround">
        <div style=" margin-right: 1.6rem;" class="waveWrapper"  v-bind:class="[winningPercent.down>winningPercent.up ? 'waveWrapperActiveClass' : '']">
          <div @click="MakeSureShow(1)" class="wave waveUp">
            <!--<div  v-bind:class="[winningPercent.down>winningPercent.up ? 'waveWrapperActiveClass' : '']" class="waveCont" :style="{top: 40-winningPercent.up+'%'}"></div>-->
            <!--<div  v-bind:class="[winningPercent.down>winningPercent.up ? 'waveWrapperActiveClass' : '']" class="waveCont_2"  :style="{top:40-winningPercent.up+'%'}"></div>-->
            <!--<div  v-show="winningPercent.up>25" :style="{marginTop: 90-winningPercent.up/2+'%'}">{{winningPercent.up}}%</div>-->
            <!--<img class="waveImg" src="../../assets/info/UpBtn.png"/>-->
            <span class="waveFont">{{winningPercent.up}}%</span>
          </div>
        </div>

        <div style="margin-right: 1.78rem;" class="waveWrapper" v-bind:class="[winningPercent.down<winningPercent.up ? 'waveWrapperActiveClass' : '']">
          <div @click="MakeSureShow(0)" class="wave waveDown">
            <!--<div v-bind:class="[winningPercent.down<winningPercent.up ? 'waveWrapperActiveClass' : '']" class="waveCont" :style="{top: 40-winningPercent.down+'%'}"></div>-->
            <!--<div v-bind:class="[winningPercent.down<winningPercent.up ? 'waveWrapperActiveClass' : '']" class="waveCont_2" :style="{top: 40-winningPercent.down+'%'}"></div>-->
            <!--<div v-show="winningPercent.down>25" :style="{marginTop: 90-winningPercent.down/2+'%'}">{{winningPercent.down}}%</div>-->
            <!--<img class="waveImg" src="../../assets/info/DownBtn.png"/>-->
            <span class="waveFont">{{winningPercent.down}}%</span>
          </div>
        </div>
      </div>

    </div>

    <TransactionList></TransactionList>


    <div class="tradingMask tradingMask_1">
      <div class="MakeSureTrading animated bounceIn">
        <div class="MakeSureTradingTop">
          {{language.Confirm_transaction}}
          <img @click="MakeSureHide()" src="../../assets/commentImg/closeIcon.png" />
        </div>
        <div class="MakeSureTradingTopBody">
          <template v-if="isUp">
            <p>{{language.Buy_and_sell}}:&nbsp <span style="color: RGBA(254, 123, 131, 1)">{{language.Buy}}</span></p>
          </template>
          <template v-else>
            <p>{{language.Buy_and_sell}}:&nbsp <span style="color: #519175">{{language.Sell}}</span></p>
          </template>
          <p>{{language.Number_of_hands}}:&nbsp{{hand}}{{language.hand}}</p>
          <p>{{language.Currency_amount}}: &nbsp{{SumOfUsdt}} USDT</p>
        </div>
        <template v-if="isUp">
          <div @click="MakeSureHide(1)" class="MakeSureTradingButtom">
            {{language.Confirm_buy}}
          </div>
        </template>
        <template v-else>
          <div @click="MakeSureHide(2)" class="MakeSureTradingButtom">
            {{language.Confirm_sell}}
          </div>
        </template>
      </div>
    </div>



    <!--<div class="tradingMask tradingMask_2">-->
      <!--<div class="MakeSureTrading animated bounceIn">-->
        <!--<div class="MakeSureTradingTop">-->
          <!--{{language.Number_of_hands}}-->
          <!--<img @click="closeHand(0)" src="../../assets/commentImg/closeIcon.png" />-->
        <!--</div>-->
        <!--<div class="MakeSureTradingTopBody">-->
          <!--<mt-picker  :visibleItemCount="5" :slots="slots" @change="onValuesChange"></mt-picker>-->
        <!--</div>-->
        <!--<div @click="closeHand(1)" class="MakeSureTradingButtom">-->
          <!--{{language.Confirm}}-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->


  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
  import EcBlock from './indexComponents/EchartBlock'
  import tradingHeader from './indexComponents/tradingHeader'
  import TransactionList from './indexComponents/TransactionList'
  import winPage from './indexComponents/winPage'
  import LosePage from './indexComponents/LosePage'
  import axios from "axios";
  import qs from "qs";
  import gob from "../../store/config.js";
  import ErrorTips from "../../store/ErrorTips"
  export default{
    components:{
      EcBlock,
      tradingHeader,
      TransactionList,
      winPage,
      LosePage
    },
    beforeCreate:function () {
      $('body').css('background','#000');
      var obj = {
        status:"last_data HTbtccny",
        isClose:false
      }
      this.$store.dispatch('actionGetGameStatus',obj);
    },
    computed:{
      getRound:function () {
        return this.$store.getters.getRound
      },
      getIsGaming:function () {
        return this.$store.getters.getIsGaming
      },
      getGameTips:function () {
        return this.$store.getters.getGameTips
      },
      isWin:function () {
        return this.$store.getters.getIsWin
      },
      getHistory:function () {
        return this.$store.getters.getHistory
      },
      language:function () {
        return this.$store.getters.getLanguage.MainPahe;
      },
      getTime:function () {
        return this.$store.getters.getTime
      },
      getRound:function () {
        return this.$store.getters.getRound
      },
    },
    watch:{
      getHistory:function(val,oldval){
            if(val.length){
              var obj = {
                status:"last_data HTbtccny",
                isClose:false
              }
              this.$store.dispatch('actiongetEchartData',obj);
            }
      },
      getTime:function(val,oldval){
        var data = {
          number:this.getRound,
          buy_product_name:"BTC"
        }
        var newObj = gob.getSign(data);
        var _this = this;
        axios.post(gob.apiUrl+'/Api/Trade/tradePercent',qs.stringify(newObj)).then(function (res) {
          if(res.data.re) {
            if (res.data.re.percent.up == 0 && res.data.re.percent.down == 0) {
              _this.winningPercent = {
                up:50,
                down:50
              }
            } else {
              _this.winningPercent.up = res.data.re.percent.up;
              _this.winningPercent.down = res.data.re.percent.down;
            }
          }
        })
      },
      isWin:function(val,oldval){
        if(val == 1){
          $('.winPage').fadeIn();
          var _this = this;
          clearInterval(this.timer);
          this.timer = setInterval(function () {
            _this.time++;
            if(_this.time == 5){
              clearInterval(_this.timer);
              $('.winPage').fadeOut();
            }
          },1000);
        }else if(val == 2){
          $('.losePage').fadeIn();
          var _this = this;
          clearInterval(this.timer);
          this.timer = setInterval(function () {
            _this.time++;
            if(_this.time == 5){
              clearInterval(_this.timer);
              $('.losePage').fadeOut();
            }
          },1000);
        }else{
          $('.isWinPage').hide()
        }
      },
      hand:function (val,oldval){
        if(localStorage.getItem('game_2_UserData')){
          var obj = {
            userid: JSON.parse(localStorage.getItem('game_2_UserData')).id,
            token: JSON.parse(localStorage.getItem('game_2_UserData')).token,
            buy_count: this.hand
          }
          var _this = this;
          var newObj = gob.getSign(obj);
          axios.post(gob.apiUrl+'/Api/Trade/orderQuery',qs.stringify(newObj)).then(function (res) {
            if(gob.isOutLogin(res)){
              _this.SumOfUsdt = res.data.re;
            }
          });
        }else{
          var _this = this;
          setTimeout(function () {
            _this.$router.push({ name: 'Login'});
          },800)
          Toast({
            message: ErrorTips.getErrorTipsObj().Not_logged_in,
            position: 'top',
            duration: 2000
          });
        }
      }
    },
    mounted:function () {
      $(".isWinPage").height($(window).height());
      var _this = this;
      $('.choiceItemGround .choiceItem').click(function () {
        $('.choiceItemGround .choiceItem').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('hasHand')){
          _this.hand = parseInt($(this).text());
        }
      })

      $('.IndexTopBar a').click(function(){
        $('.IndexTopBar a').removeClass('LinkActive');
        $(this).addClass('LinkActive');
      })
    },
    data:function () {
      return{
        winningPercent:{
          up:50,
          down:50
        },
        time:0,
        timer:null,
        isclickBar:false,
        gameTiem:null,
        rangeValue:0,
        isRangeShow:false,
        isShow:false,
        isUp:true,
        hand:0,
        SumOfUsdt:0,
        CustomizeHand:null,
        slots: [
          {
            flex:1,
            values: [],
            defaultIndex:13,
            className: 'slot1',
          }
        ]
      }
    },
    methods:{
      MakeSureShow:function (isUp) {
        $("html").css('overflow','hidden');
        if(localStorage.getItem('game_2_UserData')) {
          if(this.hand == 0){
            this.hand = 2;
          }
          if(this.getIsGaming){
            Toast({
              message: this.getGameTips+','+ErrorTips.getErrorTipsObj().No_orders_for_the_time_being,
              position: 'top',
              duration: 2000
            });
          }else{
            $('.tradingMask_1').show();
            if(isUp){
              this.isUp = true;
            }else{
              this.isUp = false;
            }
          }
        }else{
          var _this = this;
          setTimeout(function () {
            _this.$router.push({ name: 'Login'});
          },800)
          Toast({
            message: ErrorTips.getErrorTipsObj().Not_logged_in ,
            position: 'top',
            duration: 2000
          });
        }
      },
      MakeSureHide:function (isUp) {
        $('html').css('overflow','scroll');
        if(isUp){
          if(this.getIsGaming){
            Toast({
              message: this.getGameTips+','+ErrorTips.getErrorTipsObj().No_orders_for_the_time_being,
              position: 'top',
              duration: 2000
            });
          }else{
          var obj = {
            userid:JSON.parse(localStorage.getItem("game_2_UserData")).id,
            number:this.getRound,
            token:JSON.parse(localStorage.getItem("game_2_UserData")).token,
            users:JSON.parse(localStorage.getItem("game_2_UserData")).id,
            buy_product_name:this.$router.nowPage,
            buy_direct:1,
            buy_count:this.hand
          }
          if(isUp == "1"){
            obj.buy_direct = 1;
            this.$store.dispatch('actionTrade',obj);
          }else if(isUp == "2"){
            obj.buy_direct = -1;
            this.$store.dispatch('actionTrade',obj);
          }
          $('.tradingMask_1').hide();
          }
        }else {
          $('.tradingMask_1').hide();
        }
      },
      changeHand:function () {
        $('.tradingMask_2').toggle();
        $("html").css('overflow','hidden')
      },
      onValuesChange() {
        if(isNaN(this.CustomizeHand)){
          Toast({
            message: "请输入数字",
            position: 'top',
            duration: 2000
          });
          this.CustomizeHand = null;
          this.hand = 2;
        }else{
          if(this.CustomizeHand>=52 && this.CustomizeHand<=1000){
            if(this.CustomizeHand%2 == 0){
              this.hand = parseInt(this.CustomizeHand);
            }else{
              Toast({
                message: "手数不能为奇数",
                position: 'top',
                duration: 2000
              });
              this.CustomizeHand = null;
              this.hand = 2;
            }
          }else{
            Toast({
              message: "手数不能少与52或大于1000",
              position: 'top',
              duration: 2000
            });
            this.CustomizeHand = null;
            this.hand = 2;
          }
        }
      },
      closeHand:function (index) {
        $("html").css('overflow','scroll')
        $('.tradingMask_2').toggle();
        if(index){
          this.isclickBar = true;
          this.hand = parseInt(this.rangeValue);
        }
      },
    }

  }
</script>

<style>

</style>
