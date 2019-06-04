<template>
 <div   style="padding-top: 3.17rem"  class="ZFBwrapper">
   <top>出售</top>
    <div class="top">
      <span class="tips" style="margin-right: 0.857rem ;">出售金额</span>
      <span class="block">1200&nbspCNY</span>
      <img src="../../../assets/exchange/exchangeCard.png" />
      <span class="block">120&nbspUSDT</span>
    </div>
    <p class="aboutSell">
      请务必使用您本人的实名账户，被激活的收款方式将在交易时向买方展示。
    </p>

    <div class="inputWrapper">
          <span class="tips">收款方式</span>
          <input type="text" disabled/>
    </div>

     <bankCard></bankCard>

 </div>
</template>

<script>
    import top  from '../../common/commentTop'
    import weixin from './sellType/weixin'
    import zfb from './sellType/zhifubao'
    import bankCard from './sellType/bankCard'
    export default {
        name: "zhifubao",
        components:{
          weixin,
          zfb,
          bankCard,
          top
        }
      //0.857rem 24px
      // 0.928rem 26px
      // 1.28rem 36px
      //2.5rem 70px
      //1.428rem 40px
      //0.78571rem 22px
    }
</script>

<style >
.ZFBwrapper .btn{
  display: block;
  margin: 0 auto;
  margin-top: 9.28rem;
  width:8.57rem;
  height:2.14rem;
  text-align: center;
  line-height: 2.14rem;
  background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
  border-radius:1.28rem;
  color: #fff;
  font-size: 1rem;
}
.ZFBwrapper .getQtCode{
  display: block;
  margin: 0 auto;
  width:10rem;
  height:10rem;
  border:1px dashed rgba(255,255,255,0.6);
}
.ZFBwrapper .getQtCode p{
  color: #fff !important;
  font-size: 0.78571rem;
  width: 100%;
}
.ZFBwrapper .getQtCode p:first-child{
  margin-top: 3.5rem;
  margin-bottom: 0.714rem;
}
.ZFBwrapper .ZFBwrapperType{
  padding-left: 0.857rem;
  text-align: left;
  color: #fff;
  margin-bottom: 1.428rem ;
}
.ZFBwrapper .inputWrapper{
  width: 100%;
  height: 2.5rem;
  padding: 0rem 0.857rem 0px 0.857rem;
  padding-top: 1.25rem;
  margin-bottom: 1.428rem ;
}
.ZFBwrapper .inputWrapper .tips{
  display: inline-block;
  float: left;
  transform: translateY(-50%);
}
.ZFBwrapper .inputWrapper input{
  display: inline-block;
  float: right;
  border: none;
  outline: none;
  width:20rem;
  height:2.5rem;
  background:rgba(0,0,0,1);
  box-shadow:0px 0px 20px 0px rgba(41,46,50,1);
  transform: translateY(-50%);
  color: #fff;
  padding-left: 0.847rem;
}
.ZFBwrapper  .aboutSell{
  padding:  0.928rem 0.857rem  0.857rem  0.857rem ;
  text-align: left;
  color: #fff;
  font-size:  0.928rem ;
  line-height: 1.28rem;
}
.ZFBwrapper .top{
  height: 4.5rem;
  padding-top: 2.25rem;
  padding-left: 0.857rem;
  font-size: 0.857rem;
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}
.ZFBwrapper .tips{
  color: #fff;
}
.ZFBwrapper .block{
  width:7.142rem;
  height:1.5714rem;
  line-height: 1.5714rem;
  color: #fff;
  text-align: right;
  border-radius:4px;
  border:1px solid rgba(255,255,255,0.4);
  padding-right: 0.571rem;
}
.ZFBwrapper img{
  margin: 0 0.71428rem;
  width: 0.71428rem;;
}
.ZFBwrapper .top *{
  display: inline-block;
  float: left;
  transform: translateY(-50%);
}
</style>
