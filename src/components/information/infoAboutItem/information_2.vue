<template>
<div class="infoAboutInfo">
  <div  v-if="BTC" class="infoAboutInfoItem">
    <p>
      <span>BTC</span>
      <span  style="font-size: 0.875rem"  v-bind:class="[BTC.PriceChangeRatio>0 ? 'up' : 'down']">
        <template v-if="BTC.PriceChangeRatio && BTC.PriceChangeRatio>0">+</template>{{BTC.PriceChangeRatio}}%
      </span>
    </p>
    <p v-if="ETH">
      <span style="font-size: 0.875rem;">{{BTC.Amount |toFixed_2}} {{language_2.ten_thousand}} BTC
        <!--/402.93亿 CNY-->
      </span>
      <span v-if="BTC">¥{{BTC.curprice}}</span>
    </p>
  </div>
  <div v-if="LTC" class="infoAboutInfoItem">
    <p>
      <span>LTC</span>
      <span  style="font-size: 0.875rem;"  v-bind:class="[LTC.PriceChangeRatio>0 ? 'up' : 'down']">
        <template v-if="LTC.PriceChangeRatio && LTC.PriceChangeRatio>0">+</template>{{LTC.PriceChangeRatio}}%
      </span>
    </p>
    <p>
      <span style="font-size: 0.875rem;">{{LTC.Amount |toFixed_2}} {{language_2.ten_thousand}} LTC
        <!--/402.93亿 CNY-->
      </span>
      <span v-if="LTC">¥{{LTC.curprice}}</span>
    </p>
  </div>
  <div v-if="ETH"  class="infoAboutInfoItem">
    <p>
      <span>ETH</span>
      <span  style="font-size: 0.875rem"  v-bind:class="[ETH.PriceChangeRatio>0 ? 'up' : 'down']">
       <template v-if="ETH.PriceChangeRatio && ETH.PriceChangeRatio>0">+</template>{{ETH.PriceChangeRatio}}%
      </span>
    </p>
    <p>
      <span style="font-size: 0.875rem;">{{ETH.Amount |toFixed_2}} {{language_2.ten_thousand}}  ETH
        <!--/402.93亿 CNY-->
      </span>
      <span v-if="ETH">¥{{ETH.curprice}}</span>
    </p>
  </div>
</div>
</template>

<script>
    export default {
      name: "information",
      mounted:function () {
        if(!this.getIsGetData){
          this.$store.dispatch('actionLastData');
        }
      },
      filters:{
        toFixed_2:function (val) {
           return (val/10000).toFixed(2)
        }
      },
      computed:{
        BTC:function () {
          return this.$store.getters.getBTC;
        },
        ETH:function () {
          return this.$store.getters.getETH;
        },
        LTC:function () {
          return this.$store.getters.getLTC;
        },
        language:function () {
          return this.$store.getters.getLanguage.infoPage;
        },
        getIsGetData:function () {
          return this.$store.getters.getIsGetData;
        },
        language_2:function () {
          return this.$store.getters.getLanguage.infoPageDetail
        },
      },
    }
</script>

<style scoped>
.infoAboutInfoItem{
  height: 4.428rem;
  padding: 0.857rem 0.785rem 0.857rem 0.785rem;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}
.infoAboutInfoItem .up{
  color: RGBA(254, 123, 131, 1)
}
.infoAboutInfoItem .down{
  color: RGBA(51, 145, 109, 1);
}
.infoAboutInfoItem p{
  height: 1rem;
  line-height: 1rem;
  margin-bottom: 0.4rem;
}
.infoAboutInfoItem:last-child{
  border-bottom:  1px solid rgba(255,255,255,0);
}
.infoAboutInfoItem p span:first-child{
  float: left;
  text-align: left;
  font-size: 0.928rem;
}
.infoAboutInfoItem p span:last-child{
  float: right;
  text-align: right;
}
</style>
