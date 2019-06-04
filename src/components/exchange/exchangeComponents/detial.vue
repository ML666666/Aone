<template>
<div>
  <div class="sellDetailWrapper">
    <p>订单编号：#123456789</p>
    <p>下单时间：2018-10-16-11:02</p>
    <p>您已向Jobs购买183 USDT</p>
    <p>单价：6.53CNY/USDT</p>
    <p>总价：1200CNY</p>
  </div>
  <div class="sellDetailAbout">
     <span class="leftBlock">
          备注：买家付款时限15分钟
     </span>
    <span class="rightBlokc">
          <span>代付款：</span>&nbsp<span style="color:RGBA(26, 121, 255, 1)">1200&nbspCNY</span>
     </span>
  </div>
</div>
</template>

<script>
    export default {
        name: "detial"
    }
</script>

<style scoped>
  .sellDetailWrapper{
    padding-left:0.857rem;
    padding-top: 0.857rem;
    border:1px solid rgba(255,255,255,0.2);
    margin-bottom: 0.857rem;
  }
  .sellDetailWrapper p{
    font-size: 0.928rem;
    line-height:1.28rem ;
    text-align: left;
    color: #fff;
    padding-bottom: 0.857rem;
  }
  .sellDetailAbout{
    height: 1.428rem;
    padding: 0 0.857rem;
    color: #fff;
    margin-bottom: 0.857rem ;
    /*margin-bottom: 2.142rem;*/
  }
  .sellDetailAbout .leftBlock{
    height: 1.428rem;
    float: left;
  }
  .sellDetailAbout .rightBlokc{
    float: right;
    height: 1.428rem;
    font-size: 1rem;
  }
</style>
