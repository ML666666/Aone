<template>
	<div class="tradingPage">
		<div class="IndexTopBar">
			<router-link to="/trading/BTC" class="LinkActive">
        <img src="../../assets/members/BTC.png" class="IndexTopBarImg"/>
        <p class="IndexTopBarItem">BTC</p>
        <!--<span></span>-->
      </router-link>
			<router-link to="/trading/LTC">
        <img src="../../assets/members/LTC.png" class="IndexTopBarImg"/>
        <p class="IndexTopBarItem">LTC</p>
        <!--<span></span>-->
      </router-link>
			<router-link to="/trading/ETH">
        <img src="../../assets/members/ETH.png" class="IndexTopBarImg"/>
        <p class="IndexTopBarItem">ETH</p>
       <!-- <span></span>-->
      </router-link>
		</div>

    <transition :name="changeType"  mode="out-in">
        <router-view></router-view>
    </transition>

    <winPage></winPage>
    <LosePage></LosePage>
	</div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
  let ReconnectingWebSocket = require('../../assets/reconnecting-websocket.min.js');
  import EcBlock from './indexComponents/EchartBlock'
  import tradingHeader from './indexComponents/tradingHeader'
  import TransactionList from './indexComponents/TransactionList'
  import winPage from './indexComponents/winPage'
  import LosePage from './indexComponents/LosePage'
	export default{
     components:{
       EcBlock,
       tradingHeader,
       TransactionList,
       winPage,
       LosePage
     },
     mounted:function () {
       var _this = this;
       var hiddenProperty = 'hidden' in document ? 'hidden' :
         'webkitHidden' in document ? 'webkitHidden' :
           'mozHidden' in document ? 'mozHidden' :
             null;
       var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
       var onVisibilityChange = function() {
         if (_this.$router.history.current.fullPath.indexOf('trading') == 1) {
           if (!document[hiddenProperty]) {
             _this.$router.push({name: localStorage.getItem('RF_Page')})
           } else {
             _this.$router.push({name: "BACK"});
           }
         }
       };
       document.addEventListener(visibilityChangeEvent, onVisibilityChange);
       //屏幕是否可见时触发
     },
     beforeCreate:function () {
       $('body').css('background','#000');
     },
     computed:{
     },
	  data:function () {
      return {
        changeType: 'vux-pop-nor',
      }
    }
	}
</script>

<style>
  .tradingPage{
    position: relative;
    padding-top: 1.642rem;
  }
  .mint-toast.is-placetop{
    background: #5a5a5a !important;

  }
  .choiceGroundWrapper input::-webkit-input-placeholder { /* WebKit browsers */
    color: white;
  }
  .choiceGroundWrapper input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: white;
  }
  .choiceGroundWrapper input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: white;
  }
  .choiceGroundWrapper input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: white;
  }

  .picker-item{
    font-size:1.071rem;
    color: RGBA(177, 177, 177, 1);
    font-weight: 100;
  }
  .picker-item.picker-selected{
    font-size:1.281rem;
    color: RGBA(51, 51, 51, 1);
    font-weight: 100;
  }
  .picker{
    margin-top: 2.42rem;
  }
  .tradingMask_2 .MakeSureTradingButtom{
    margin-top: 2.857rem;
  }
  .waveWrapper{
    border-radius: 50%;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    position: relative;
    z-index:1;
    transform: rotate(0deg);
  }
  .wave {
    position: relative;
    width:5rem;;
    height: 5rem;
    border-radius: 50%;
    color: #fff;
    font-size: 0.814rem;
    z-index:1;
    overflow: hidden;
    transform: rotate(0deg);
  }
  .waveFont{
    position: absolute;
    font-size: 0.857rem;
    top: 0.718rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .waveImg{
    position: absolute;
    top:0px;
    left: 0px;
    width:5rem;;
    height: 5rem;
    display: block;
   }
  .waveUp{
    background: url("../../assets/info/UpBtn.png") no-repeat center center;
    background-size: cover;
    opacity: 0.7;
  }
  .waveUp:hover{
    opacity: 1;
  }
  .waveDown{
    background: url("../../assets/info/DownBtn.png") no-repeat center center;
    background-size: cover;
    opacity: 0.7;
  }
  .waveDown:hover{
    opacity: 1;
  }
  .waveWrapperActiveClass{
    /*will-change: transform;*/
    /*transform:scale(0.83);*/
    /*opacity: 0.7;*/
  }
  .wave .waveCont,
  .wave .waveCont_2{
     transition: 0.5s;
     content: "";
     position: absolute;
     width: 8.56rem;
     height: 8.56rem;
     top: 0;
     left: 50%;
     background: rgba(255, 255, 255, .4);
     border-radius: 45%;
     transform: translate(-50%, -70%) rotate(0);
     animation: rotate 6s linear infinite;
     z-index: 10;
   }

  .wave::after {
     border-radius: 47%;
     transform: translate(-50%, -70%) rotate(0);
     animation: rotate 10s linear -5s infinite;
     z-index: 20;
   }



  .wave_2 {
    position: relative;
    width: 4.28rem;
    height: 4.28rem;
    background:linear-gradient(360deg,RGBA(8, 127, 113, 1),RGBA(115, 208, 198, 1));
    border-radius: 50%;
    color: #fff;
    font-size: 0.814rem;
    z-index:1;
    overflow: hidden;
  }
  .wave_2 .wave_2Cont,
  .wave_2 .wave_2Cont_2{
    transition: 0.5s;
    content: "";
    position: absolute;
    width: 8.56rem;
    height: 8.56rem;
    top: 0;
    left: 50%;
    background: rgba(255, 255, 255, .4);
    border-radius: 45%;
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 6s linear infinite;
    z-index: 10;
  }

  .wave_2::after {
    border-radius: 47%;
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 10s linear -5s infinite;
    z-index: 20;
  }

  @keyframes rotate {
    50% {
      transform: translate(-50%, -73%) rotate(180deg);
    } 100% {
        transform: translate(-50%, -70%) rotate(360deg);
      }
  }
  .tradingMask{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background:rgba(0,0,0,0.85);
    z-index: 1000;
    display: none;
  }
  .tradingMask .MakeSureTrading{
    width: 18.714rem;
    height: 26.285rem;
    background: rgba(255,255,255,1);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -13.1rem;
    margin-left: -9.307rem;
  }
  .MakeSureTradingButtom{
    width: 9.535rem;
    height: 2.14rem;
    background:linear-gradient(360deg,rgba(26,121,255,1),rgba(156,196,251,1));
    border-radius: 36px;
    text-align: center;
    line-height: 2.14rem;
    margin: 0 auto;
    font-size: 1rem;
    margin-top: 7.42rem;
    color: #fff;
  }
  .tradingMask .MakeSureTrading .MakeSureTradingTop{
    position: relative;
    font-size: 1rem;
    line-height: 3.428rem;
    color: #fff;
    font-size: 1rem;
    /*background:linear-gradient(180deg,rgba(91,91,91,1),rgba(33,33,33,1));*/
    background:rgba(41,46,50,1);
  }
  .MakeSureTradingTop img{
    position: absolute;
    top:1.7rem;
    right: 1.071rem;
    width: 1rem;
    height: auto;
    transform: translateY(-50%);
  }
  .MakeSureTradingTopBody{
    padding-left: 1.428rem;
    padding-right: 1.428rem;
    padding-top: 1.214rem;
  }
  .MakeSureTradingTopBody p{
    text-align: left;
   line-height: 3rem;
    border-bottom:1px solid RGBA(151, 151, 151, 0.32) ;
  }
	.IndexTopBar{
    height: 1.42rem;
    line-height: 1.42rem;
    background: #1e1e1e;
    height: 3.1828rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    margin: 0 auto;
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 200;
	}
  .IndexTopBar span{
    width: 3.8571rem;
    height: 0.428rem;
    background: RGBA(26, 121, 255, 0.7);
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 1.9rem;
    margin-left: -2.4rem;
    transform: skew(45deg);
    display: none;
  }
	.IndexTopBar a{
		display: inline-block;
		float: left;
		text-align: center;
		line-height: 3.1828rem;
    height: 3.182rem;
		width: 8.87999928rem;
		color: #fff;
		box-sizing: border-box;
    position: relative;
	}
  .IndexTopBar a .IndexTopBarItem{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 80;
  }
  .IndexTopBarImg{
    position: absolute;
    left: 2.2rem ;
    top: 50%;
    transform: translateY(-55%);
    z-index: 80;
  }
	.IndexTopBar a:nth-child(1) .IndexTopBarImg{
		/*background: url(../../assets/commentImg/BTCActive.png) no-repeat 2.3rem center;*/
		/*background-size: 0.85714rem;*/
    width: 1.1714rem;

	}
	.IndexTopBar a:nth-child(2) .IndexTopBarImg{
		/*background: url(../../assets/commentImg/LTCActive.png) no-repeat 2.3rem center;*/
		/*background-size: 0.9714rem;*/
   width: 1.1714rem;
	}
	.IndexTopBar a:nth-child(3) .IndexTopBarImg{
		/*background: url(../../assets/commentImg/ETFActive.png) no-repeat 2.3rem center;*/
		/*background-size: 0.85714rem;*/
    width: 1.1714rem;
	}
  .indexTopBar .router-link-active span{
    display: block;
  }
  .indexTopBar .router-link-active:nth-child(1){
		/*background: url(../../assets/commentImg/BTCActive.png) no-repeat 2.3rem center;*/
		/*color: #fff;*/
		/*background-size: 0.85714rem;*/
		border-bottom: 1px solid RGBA(26, 121, 255, 1);
	}
 .indexTopBar .router-link-active:nth-child(2){
		/*background: url(../../assets/commentImg/LTCActive.png) no-repeat 2.3rem center;*/
		/*color: #fff;*/
		/*background-size: 0.85714rem;*/
		border-bottom: 1px solid RGBA(26, 121, 255, 1);
	}
	.indexTopBar .router-link-active:nth-child(3){
		/*background: url(../../assets/commentImg/ETFActive.png) no-repeat 2.3rem center;*/
		/*color: #fff;*/
		/*background-size: 0.85714rem;*/
		border-bottom: 1px solid RGBA(26, 121, 255, 1);
	}
	.dataShowBlock{
		height: 2.8rem;
		margin-left:0.857rem;
    margin-right: 0.857rem;
		margin-top: 1.4rem;
		margin-bottom: 1.4rem;
    position: relative;
	}
	.dataShowBlock .dataShowBlock_left{
		height: 1.4rem;
		width: 11.107rem;
		float: left;
    transform: translateY(-40%);
	}
	.dataShowBlock .dataShowBlock_left p{
		text-align: left;
		color: #FFFFFF;
    font-size: 0.926rem;
	}
  .dataShowBlock .dataShowBlock_left p:nth-child(1){
   margin-bottom: 0.75rem;
    margin-top: 0.5rem;
    position: relative;
  }
  .dataShowBlock .rateBar{
    text-align: left;
    position: absolute;
    width: 7.28rem;
    left: 4.4rem;
    font-size: 0.785rem;
    top: 0.5rem;
    height: 1.07rem;
    color: #fff;
    font-size: 1.1rem;
  }

  .dataShowBlock  .rateBar span{
    float: left;
    height: 1.07rem;
    display: inline-block;
    line-height:1.27rem;
    text-align: center;
    background: RGBA(254, 123, 131, 1);
    font-size: 0.78rem;
    transition: 0.3s;
  }
  .dataShowBlock  .rateBar span:nth-child(2){
    background: RGBA(99, 139, 134, 1);
  }
	.dataShowBlock .dataShowBlock_right{
      height: 2.14rem;
      float: right;
	}
	.dataShowBlock_right .toOpen{
		display: inline-block;
		float: left;
		height: 100%;
		font-size: 0.92rem;
		border: 1px solid #5B5B5B;
		font-family:PingFang-SC-Regular;
		line-height: 2.14rem;
		color: RGBA(51, 51, 51, 1);
    background:#fff;
    padding-left: 0.351rem;
    padding-right: 0.351rem;
	}
	.dataShowBlock_right .toOpenTime{
    text-align: left;
		display: inline-block;
		float: left;
		background: #5B5B5B;
		height: 100%;
		color: #fff;
		font-size:1.54285rem;
    font-family:MFLiHei_Noncommercial-Regular;
    line-height: 2.14rem;
    transition: 0.3s;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
	}
	.choiceItemGround{
	  display: flex;
    flex-wrap:wrap;
    align-content: space-between;
    width: 10rem;
    margin-left: 1.78rem;
    float: left;
	}
  .choiceItemGround .active{
    border-color:RGBA(112, 176, 246, 1) !important;
  }
  .choiceItemGround .choiceCol{
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
  }
  .choiceItemGround .choiceItem{
		width: 4.28rem;
		height:2.14rem;
		display: inline-block;
		line-height: 2.14rem;
		text-align: center;
    border-radius:30px;
		border: 1px solid RGBA(216, 216, 216, 1);
		color:RGBA(216, 216, 216, 1);
    margin-bottom: 1.428rem;
    background: transparent;
	}
	.choiceItemGround .choiceItem:last-child{
		margin-right: 0px;
	}
	.defindItemBySelf {
		width: 25.0714rem;
		margin: 0 auto;
		height: 1.78571rem;
		margin-top: 1.178571rem;
	}
	.defindItemBySelfTitle {
		width: 3.714rem;
		height: 1.78571rem;
		float: left;
		line-height: 1.78571rem;
		color: #fff;
	}
	.defindItemBySelfTitleBar{
	    width: 25.0571429rem;
    	height: 1.78571rem;
    	float: right;
    	border-radius: 3px;
    	background: #5A5A5A;
    	padding-left: 0.571428rem;
    	position: relative;
    	text-align: left;
    	line-height: 1.78571rem;
   	 	color: #fff;
    	font-size: 0.785rem;
    }
	.defindItemBySelfTitleBarArrow{
		position: absolute;
   	    right: 0px;
        height: 100%;
        width: 1.46428rem;
    	background: #ABABAB;
    	border-top-right-radius: 3px;
    	border-bottom-right-radius: 3px;
    	top:0px;
	}
  .defindItemBySelfTitleBarArrow img{
    margin-top: 0.35rem;
  }
	.mt-range-runway{
		width: 25.057143rem;
	}
	.mt-range{
		width: 25.057143rem;
		margin: 0 auto;
		margin-top:1.071428rem;
	}
	.mt-range-thumb{
		width:1.11111rem !important;
		height:2.1428rem !important;
		background:linear-gradient(#A3F1FD,#1CDBF8) !important;
		border-radius:15px !important;
	}
	.mt-range-thumb:hover{
		background: linear-gradient(#A3F1FD,#1CDBF8);
		box-shadow:4px 4px 12px RGBA(#fff, #fff, #fff, 1);
	}
	.mt-range-progress{
		background: #fff;
	}
  .choiceGroundWrapper{
    height: 9.642rem;
    box-sizing: border-box;
    padding-top: 1.78rem;
  }
	.choiceButtonGround{
    width: 13.14rem;
    height: 5rem;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    float: right;
    -webkit-transform: translateY(0.7rem);
    transform: translateY(0.5rem);
	}
	.choiceButton{
		width:7.142rem;
        height: 2.1428rem;
        background:transparent;
        border-radius:4px;
        line-height: 2.1428rem;
        display: inline-block;
        font-size: 1.07rem;
        transition: 0.4s;
	}
	.UpButton{
		margin-right: 7.92rem;
		float: left;
    background:linear-gradient(360deg,rgba(32,32,32,1),rgba(80,80,80,1));
		color: #fff;
		font-family:PingFang-SC-Regular
	}
	.UpButton:hover{
		background: linear-gradient(180deg,rgba(32,32,32,1),rgba(80,80,80,1));
	    box-shadow:0px 4px 12px rgba(255,255,255,0.6);
	}
	.DownButton{
		float: left;
		color: #fff;
		background:linear-gradient(360deg,rgba(93,138,116,1),rgba(163,247,206,1));
	}
	.DownButton:hover{
		background: linear-gradient(360deg,rgba(93,138,116,1),rgba(163,247,206,1));
		box-shadow:0px 4px 12px rgba(255,255,255,0.6);
	}
	.TypeBar{
		width: 26.66rem;
		height: 2.142rem;
		margin: 0 auto;
		list-style: none;
		position: relative;
	}
	.TypeBar li{
		display: inline-block;
		float: left;
		width: 20%;
		line-height: 2.8rem;
		color: #fff;
		background: rgba(40,40,40,0.4);
		font-size:0.92rem;
    font-family:PingFang-SC-Regular;
	}
	.TypeBarTop{
		height: 2px;
		background: linear-gradient(#3a3636,#2b2828);
		position: absolute;
		top: 0px;
		width: 100%;
	}
  .UserMatchDataConteiner {
    padding-bottom: 5rem;
    margin: 0 auto;
    /*background: RGBA(19, 19, 19, 1);*/
  }
	.UserMatchDataConteiner ul{
		display: block;
		width: 100%;
		padding-top:1.28rem;
		list-style: none;
	}
	.UserMatchDataConteiner ul li{
		display: block;
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		border-bottom: 1px solid rgba(255,255,255,0.1);
	}
	.UserMatchDataConteiner ul li span{
		font-size: 0.857rem;
		color: #fff;
		font-family:PingFang-SC-Regular;
		display: inline-block;
		float: left;
    width: 20%;
	}
	.UserMatchDataConteiner ul li .userPhone{
    margin-left: 1.2rem;
	}
	.UserMatchDataConteiner ul li  .matchType{
	}
	.UserMatchDataConteiner ul li .matchNumber{
	}
	.UserMatchDataConteiner ul li .Uptype{
		color: #FE7B83;
	}
	.UserMatchDataConteiner ul li .DownType{
		color: #519175;
	}
</style>
