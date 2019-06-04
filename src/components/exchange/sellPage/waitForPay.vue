<template>
  <div style="padding-top: 3.17rem" class="waitForPay">
    <top>待支付</top>
    <detail></detail>
    <div class="line">
    </div>
    <div class="payWrapper">
      <div class="payType">
        <span class="tips">卖方收款方式</span>
        <span class="btn">联系商家</span>
      </div>
      <div class="payTypeContainer">
        <div class="payTypeItem">
          <img class="radius" src="../../../assets/exchange/radius.png" />
          <img class="card" src="../../../assets/exchange/zfb.png" />
          <p>支付宝 Jobs 13678962354</p>
        </div>
        <div class="payTypeItem">
          <img class="radius"  src="../../../assets/exchange/Hradius.png" />
          <img class="card" src="../../../assets/exchange/yhk.png" />
          <p>
            银行卡 Jobs 中国工商银行 621226 9608 7652 17698
          </p>
        </div>
      </div>
    </div>


    <template>
      <waitForPayMask v-if="false"></waitForPayMask>
      <QtMask v-if="false"></QtMask>
    </template>

    <template v-if="true">
      <p class="errorTips">备注：付款时请不要备注任何敏感字，例如：USDT等</p>
      <div style="margin-top: 10.1rem;margin-bottom:1.428rem ;" class="toPayBtn">去支付</div>
      <a href="">取消订单</a>
    </template>

    <template v-if="false">
      <p class="errorTips">备注：付款时请不要备注任何敏感字，例如：USDT等</p>
      <div class="toPayBtnGroub">
        <div class="toPayBtn leftBtn">去支付</div>
        <div class="toPayBtn rightBtn">已支付</div>
      </div>
      <a href="">取消订单</a>
    </template>

    <template v-if="false">
      <p class="errorTips">您已付款，待商家确认并放币后，您将收到183 USDT。</p>
      <p class="status">商家确认中</p>
      <a href="">取消订单</a>
    </template>

    <template v-if="false">
      <p class="errorTips">商家未收到付款，请保持电话畅通，以便客服人员能够尽快联系到您。</p>
      <p class="status">超时未付款，订单自动取消</p>
      <a href="">取消订单</a>
    </template>

    <template v-if="false">
      <p class="errorTips">商家未收到付款，请保持电话畅通，以便客服人员能够尽快联系到您。</p>
      <p class="status">申诉中</p>
      <a href="">取消订单</a>
    </template>

    <template v-if="false">
      <p class="errorTips">商家已确认收款并已放币，您前往"我的"查看币资产</p>
      <p class="status">商家已放币，交易完成。</p>
    </template>
  </div>

</template>

<script>
    import QtMask from './waitForPayComponents/QtCode'
    import waitForPayMask from './waitForPayComponents/cancelOrder'
    import detail from '../exchangeComponents/detial'
    import top from '../../common/commentTop'
    export default {
        name: "wait-for-pay",
        components:{
          top,
          detail,
          waitForPayMask,
          QtMask
        },
      //0.857rem 24px
      // 0.928rem 26px
      // 1.28rem 36px
      //2.5rem 70px
      //1.428rem 40px
      //0.78571rem 22px
      //0.714rem 20px
    }
</script>

<style scoped>
.waitForPay .status{
    margin-top: 2.142rem;
    margin-bottom: 7.571rem;
    color: RGBA(26, 121, 255, 1);
    font-size:0.928rem;
}
.waitForPay a{
    color: #fff;
    text-decoration: underline;
}
.waitForPay .toPayBtnGroub{
  height:2.142rem;
  padding: 0 3.785rem;
  margin-top: 10.1rem;
  margin-bottom:1.428rem ;
}
.waitForPay .toPayBtnGroub .leftBtn{
  display: inline-block;
  float: left;
  background: transparent;
  border: 1px solid RGBA(26, 121, 255, 1);
}
.waitForPay .toPayBtnGroub .rightBtn{
  display: inline-block;
  float: right;
}
.waitForPay  .toPayBtn{
  width:8.57rem;
  height:2.142rem;
  background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
  border-radius:36px;
  display: block;
  margin: 0 auto;
  color: #fff;
  line-height:2.142rem;
}
.waitForPay  .errorTips{
  color: #fff;
  text-align: left;
  padding-left:0.857rem;
}
.waitForPay .line{
  height:0.428rem;
  background:rgba(40,40,40,1);
  opacity:0.3956;
  margin-bottom: 0.857rem;
}
.waitForPay .payType{
  height:1.571rem;
  width: 100%;
  padding: 0 0.857rem;
  padding-top: 0.785rem;
  margin-bottom: 0.857rem;
  color: #fff;
}
.waitForPay .payType  .tips{
  height:1.571rem;
  line-height:1.571rem;
  float: left;
  transform: translateY(-50%);
  font-size:  0.928rem ;
}
.waitForPay .payType .btn{
  width:5.14rem;
  height:1.571rem;
  float: right;
  line-height: 1.571rem;;
  border-radius: 0.857rem;
  border:1px solid rgba(255,255,255,0.6);
  transform: translateY(-50%);
  font-size: 0.857rem ;
}
.payWrapper .payTypeItem{
  margin-bottom: 0.857rem;
  height: 1.571rem;
  margin-bottom: 0.714rem;
  color: #fff;
  padding-top: 0.785rem;
}
.payWrapper .payTypeItem *{
  display: inline-block;
  float: left;
}
.payWrapper .payTypeItem .radius{
  transform: translateY(-50%);
  width: 0.714rem;
  height: auto;
  margin: 0 0.857rem;
}
.payWrapper .payTypeItem .card{
  transform: translateY(-50%);
  width: 1.428rem;
  height: auto;
  margin-right: 0.857rem;
}
.payWrapper .payTypeItem p{
  transform: translateY(-50%);
  font-size:  0.857rem;;
}
.payWrapper{
  border-bottom:1px solid rgba(255,255,255,0.2);
  margin-bottom: 0.857rem;
}
</style>
