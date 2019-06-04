<template>
    <div class="MakSureBuyMask">
          <div class="MakeSureBuyBody">
              <div class="MakeSureBuyBodyTop">
                购买
                <span  @click="close">×</span>
              </div>
               <div class="MakeSureBuyBodyContainer">
                  <p class="top">购买金额</p>
                  <div class="inputWrapper">
                    <div style="text-align: right;padding-right: 0.3rem" class="block">
                      <input type="text" />
                      CNY
                    </div>
                    <img src="../../../assets/exchange/exchangeCard_2.png" height="24" width="30"/>
                    <div class="block">
                       183&nbspUSDT
                    </div>
                  </div>
                  <div class="line"></div>
                  <p class="top">支付方式</p>
                  <div class="MakeSureSellType">
                    <span>
                        <img class="radius" src="../../../assets/exchange/radius.png" height="24" width="24"/>
                        <img class="type" src="../../../assets/exchange/zfb.png" height="42" width="42"/>
                    </span>
                    <span>
                        <img class="radius" src="../../../assets/exchange/radius.png" height="24" width="24"/>
                        <img class="type" src="../../../assets/exchange/weixin.png" height="42" width="48"/>
                    </span>
                    <span>
                        <img class="radius" src="../../../assets/exchange/radius.png" height="24" width="24"/>
                        <img class="type" src="../../../assets/exchange/yhk.png" height="42" width="60"/>
                    </span>
                  </div>
                  <div @click="toPay" class="sellCommentBtn">
                    确认出售
                  </div>
               </div>
          </div>
    </div>
</template>

<script>
    import btn  from './btn'
    export default {
       components:{
         btn
       },
       methods: {
         close:function () {
           this.$emit('closeMask',false);
         },
         toPay:function () {
           this.$router.push({ name: 'waitForPay'});
         }
       },
        name: "make-sure-buy-page",
      //0.857rem 24px
      // 0.928rem 26px
      // 1.28rem 36px
      //2.5rem 70px
      //1.428rem 40px
      //0.78571rem 22px
    }
</script>

<style scoped>
  .sellCommentBtn{
    display: block;
    margin: 0 auto;
    width:8.57rem;
    height:2.14rem;
    text-align: center;
    line-height:2.14rem;
    background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
    border-radius:1.28rem;
    color: #fff;
    font-size: 1rem;
    margin-top: 6.85714rem;
  }
.MakSureBuyMask{
  position: fixed;
  top:0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0,0,0,0.7);
  z-index: 1000;
}
.MakeSureBuyBody{
  position: absolute;
  width:18.714rem;
  height:25.714rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:rgba(255,255,255,1);
}
.MakeSureBuyBody  .MakeSureBuyBodyTop{
  width:18.714rem;
  height:3.428rem;
  background:rgba(41,46,50,1);
  text-align: center;
  line-height: 3.428rem;
  font-size: 1rem;
  color: #fff;
  position: relative;
}
.MakeSureBuyBody  .MakeSureBuyBodyTop span{
  position: absolute;
  /* right: 0.857rem; */
  font-size: 1rem;
  line-height: 3.428rem;
  font-size: 1.857rem;
  width: 4rem;
  right: 0px;
}
.MakeSureBuyBodyContainer{
  padding: 0.857rem;
}
.MakeSureBuyBodyContainer .MakeSureSellType{
  height:1.428rem;
}
.MakeSureBuyBodyContainer .MakeSureSellType span{
  display: inline-block;
  float: left;
  height:1.428rem;
  width: 3.285rem;
  padding-top: 0.714rem;
  margin-right: 2.2714rem;
}
.MakeSureBuyBodyContainer .radius{
  margin-right: 1rem;
  width: 0.714rem;
  transform: translateY(-50%);
  height: auto;
  display: inline-block;
  float: left;
}
.MakeSureBuyBodyContainer .type{
  width: 1.428rem;
  transform: translateY(-50%);
  height: auto;
  display: inline-block;
  float: left;
}

.MakeSureBuyBodyContainer .line{
  height: 1px;
  background: rgba(151,151,151,1);
  margin-top:0.857rem;
  margin-bottom: 0.857rem;
}
.MakeSureBuyBodyContainer .top{
  height:1.28rem;
  font-size:0.928rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:1.28rem;
  text-align: left;
  margin-bottom:0.857rem;
}
.MakeSureBuyBodyContainer .inputWrapper{
  height: 1.428rem;
  padding-top: 0.714rem;
}
.MakeSureBuyBodyContainer .inputWrapper *{
  display: inline-block;
  float: left;
  transform: translateY(-50%);
}
.MakeSureBuyBodyContainer .inputWrapper input{
  width: 2.5rem;
  height: 1.428rem;
  background: transparent;
  color: rgba(51,51,51,1);
  -webkit-transform: translateY(-0.16rem) !important;
  transform: translateY(-0.16rem) !important;
  width: 2.4rem;
  font-size: 0.714rem;
  margin-left: 0.1rem;
}
.MakeSureBuyBodyContainer .inputWrapper .block{
  width:5rem;
  height:1.428rem;
  border-radius:4px;
  border:1px solid rgba(8,8,8,0.2);
  line-height: 1.428rem;
  text-align: center;
  font-size: 0.714rem;
  color: RGBA(51, 51, 51, 1);
}
.MakeSureBuyBodyContainer .inputWrapper  img{
  width:0.714rem;
  margin: 0 0.714rem;
  height: auto;
}
</style>
