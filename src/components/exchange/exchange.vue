<template>
<div style="padding-top: 3.12rem" class="exChangeWrapper">
  <div class="exChangeTop">
    <span @click="isSell = !isSell" v-bind:class="{ heightLight: !isSell }">购买</span>
    <span @click="isSell = !isSell"  v-bind:class="{ heightLight: isSell }">出售</span>
  </div>

  <div class="selectExchangeType">
    <span class="type">支付方式</span>
    <span class="block">
      支付宝
    </span>
    <span class="type">最低限额</span>
    <span class="block">
      500
    </span>
    <span class="aboutChange">
      CNY
      <img src="../../assets/exchange/exchangeCard.png" height="24" width="30"/>
      USDT
    </span>


  </div>

  <div class="aboutChangeTitle">
    <span>数量(USDT)</span>
    <span>限额(CNY)</span>
    <span>单价(CNY)</span>
    <span>操作</span>
  </div>

  <div class="exChangeList">
    <item :isSell="isSell"></item>
    <item :isSell="isSell"></item>
    <item :isSell="isSell"></item>
  </div>

</div>
</template>

<script>
    import item from './exchangeComponents/exchangeItem'
    import commentTop from '../common/BlackCommentTop'
    export default {
        name: "exchange",
        components:{
          commentTop,
          item
        },
        data:function () {
          return{
            isTipsShow:false,
            isSell:false
          }
        },
        watch:{
          isSell:function (val) {

          }
        }
    }
</script>

<style scoped>
.exChangeTop{
  width: 100%;
  position: fixed;
  top: 0px;
  display: block;
  height: 3.1428rem;
  border-bottom: 1px solid rgba(255,255,255,0.4);
  background: #080808;
}
.exChangeTop span{
  width: 50%;
  display: inline-block;
  float: left;
  line-height: 3.142rem;
  color: #fff;
  font-size: 1.07rem;
}
.heightLight{
  color: RGBA(26, 121, 255, 1) !important;
}
.selectExchangeType{
  height: 4.28rem;
  padding-left:0.856rem;
  padding-left:0.856rem;
  padding-top:2.14rem;
}
.selectExchangeType .aboutChange img{
   width: 0.714rem;
  height: auto;
  transform: translateY(-0.3rem);
}
.selectExchangeType span{
  display: inline-block;
  float: left;
  transform: translateY(-50%);
  color: #fff;
}
 .selectExchangeType .type{
   font-size: 0.857rem;
   margin-right: 0.428rem;
 }
  .selectExchangeType .block{
    width:4.714rem;
    height:1.428rem;
    line-height: 1.428rem;
    border-radius:4px;
    border:1px solid rgba(255,255,255,0.5);
    font-size: 0.514rem !important;
    margin-right: 1.214285rem;
  }
 .aboutChangeTitle{
   height:2.571rem;
   background:rgba(40,40,40,0.4);
 }
.aboutChangeTitle span{
  display: inline-block;
  float: left;
  width: 25%;
  line-height: 2.571rem;
  font-size: 0.857rem;
  color: #fff;
}

</style>
