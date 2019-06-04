<template>
<div class="sellDetailContainer"  style="padding-top: 3.17rem" >
  <top>
    交易状态1
  </top>
  <detail></detail>
  <div class="sellDetailAboutStatus">
    买家付款中
  </div>
  <div class="btnGroub">
    <div class="btn left">未收款</div>
    <div class="btn right">已收款</div>
  </div>
</div>
</template>

<script>
    import detail from '../exchangeComponents/detial'
    import top from '../../common/commentTop'
    export default {
        name: "sell-detail",
        components:{
          top,
          detail
        }
      //0.857rem 24px
      // 0.928rem 26px
      // 1.28rem 36px
      //2.5rem 70px
      //1.428rem 40px
      //0.78571rem 22px
    }
</script>

<style scoped>
.sellDetailAboutStatus{
  font-size: 1rem;
  color:RGBA(26, 121, 255, 1);
  text-align: center;
  margin-bottom: 14.85714rem;
  margin-top: 2.142rem;
}
.sellDetailContainer .btnGroub{
  padding: 3.714rem;
  height: 2.14rem;
}
.sellDetailContainer .left{
   float: left;
   border: 1px solid RGBA(26, 121, 255, 1);
 }
.sellDetailContainer .right{
  background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
  float: right;
}
.sellDetailContainer .btn{
  width:8.571rem;
  height: 2.14rem;
  line-height: 2.14rem;
  color: #fff;
  text-align: center;
  border-radius:36px;
}
</style>
