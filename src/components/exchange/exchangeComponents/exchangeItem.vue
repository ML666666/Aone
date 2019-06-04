<template>
  <div class="exChangeItem">
    <template v-if="!isSell">
      <div @click="toBuy" class="btn">购买</div>
    </template>
    <template v-else>
      <div @click="toSell" class="btn">出售</div>
    </template>
    <div class="exChangeItemNumber">
      <span>9202</span>
      <span>500-12000</span>
      <span>6.53</span>
      <span></span>
    </div>
    <p class="exchangeItemAbout">
      商家(30日成交量 30日成交率 )：Jobs (3326 86%)
    </p>
    <div class="exchangeItemType">
      <div class="wrapper">
        <span>付款方式:</span>
        <img src="../../../assets/exchange/zfb.png" height="24" width="30"/>
        <img src="../../../assets/exchange/weixin.png" height="42" width="48"/>
        <img src="../../../assets/exchange/yhk.png" height="42" width="60"/>
      </div>
    </div>
    <div v-if="false" class="tips">
      <template v-if="isSell">
        您需要绑定至少一种收款方式，才可以出售货币。去添加"<span>收款方式</span>"。
      </template>
      <template v-else>
        您需要通过实名认证，才可以购买。请点击"<span>实名认证</span>"设置。
      </template>
    </div>
    <transition :name="changeType"  mode="out-in">
      <makeSureBuyPage @closeMask="ToCloseMask" v-if="isMaskShow"></makeSureBuyPage>
    </transition>


  </div>
</template>

<script>
    import makeSureBuyPage from './makeSureBuyPage'
    export default {
        name: "exchange-item",
        props:['isSell','Obj'],
        components:{
          makeSureBuyPage
        },
        data:function () {
          return{
            isMaskShow:false,
            changeType:"vux-pop-nor"
          }
        },
        methods: {
          toBuy:function () {
              this.isMaskShow = !this.isMaskShow;
          },
          toSell:function(){
            this.$router.push({ name: 'sell'})
          },
          ToCloseMask:function (msg) {
            this.isMaskShow = msg;
          }
        }
    }
</script>

<style scoped>
  .exChangeItem{
    position: relative;
    min-height: 6.107rem;
    border-bottom:1px solid rgba(255,255,255,0.2);
  }
  .exChangeItem .btn{
    position: absolute;
    width:3.142rem;
    height:1.71428rem;
    background:rgba(26,121,255,1);
    border-radius:4px;
    top: 2.214rem;
    right: 0.8571rem;
    line-height: 1.71428rem;
    text-align: center;
    color: #fff;
    font-size: 0.857rem;
  }
  .exChangeItem:last-child{
    border: none;
  }
  .exChangeItemNumber{
    height: 2.57142rem;
  }
  .exChangeItemNumber span{
    width: 25%;
    display: inline-block;
    float: left;
    line-height: 2.5714rem;
    color: #fff;
  }
  .exchangeItemAbout{
    width:19rem;
    height:1.142rem;
    margin-left:1.428rem;
    font-size: 0.785714rem;
    color: #fff;
  }

  .exchangeItemType{
    margin-top: 0.428rem;
    padding-left:1.528rem;
    width: 100%;
    margin-bottom: 0.892857rem ;
  }
  .exchangeItemType:after{
    display: block;
    clear: both;
    content: " ";
    height: 0px;
  }
  .exchangeItemType .wrapper{
    color: #fff;
    font-size: 0.785714rem;
    margin-bottom: 0.85714rem;
  }
  .exchangeItemType span{
    display: inline-block;
    float: left;
    margin-right: 0.71428rem;
  }
  .exchangeItemType img{
    display: inline-block;
    float: left;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.71428rem;
  }
  .exChangeItem .tips{
    width: 100%;
    font-size: 0.785714rem;
    display: block;
    color: RGBA(26, 121, 255, 1);
    text-align: left;
    padding: 0rem 1.428rem 0.892857rem 1.428rem;
  }
  .exChangeItem .tips span{
    text-decoration: underline;
  }
</style>
