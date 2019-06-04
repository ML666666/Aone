<template>
<div class="infoMarket">
  <template v-if="obj">
    <div class="infoMarketAbount infoMarketItem">
      {{obj.introduction}}
    </div>
    <div class="infoMarketItemList">
      <div class="infoMarketItem">
        <span>{{language.market_value}}</span>
        <span>{{obj.market_value}}</span>
      </div>
      <div class="infoMarketItem">
        <span>{{language.ranking}}</span>
        <span>{{obj.ranking}}</span>
      </div>
      <div class="infoMarketItem">
        <span>{{language.total_market_value_rate}}</span>
        <span>{{obj.total_market_value_rate}}</span>
      </div>
      <div class="infoMarketItem">
        <span>{{language.flow_rate}}</span>
        <span>{{obj.flow_rate}}</span>
      </div>
      <div class="infoMarketItem">
        <span>{{language.turnover_rate}}</span>
        <span>{{obj.turnover_rate}}</span>
      </div>
      <div class="infoMarketItem">
        <span>{{language.core_algorithm}}</span>
        <span>{{obj.core_algorithm}}</span>
      </div>
      <div class="infoMarketItem">
        <span>{{language.consensus_mechanism}}</span>
        <span>{{obj.consensus_mechanism}}</span>
      </div>
      <div class="infoMarketItem">
        <span>{{language.project_start_time}}</span>
        <span>{{obj.project_start_time}}</span>
      </div>
      <div class="infoMarketItem wallet">
        <span>{{language.support_purse}}</span>
        <span>{{obj.support_purse}}</span>
      </div>
    </div>
  </template>
  <template v-else>
    <p style="margin-top: 2rem">
      <b>~</b> {{language_2.No_data}} <b>~</b>
    </p>
  </template>
</div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import { Indicator } from 'mint-ui';
  import gob from "../../../store/config.js";
  import Nothing from '../../common/Nothingblock'
    export default {
        name: "market",
        props:["type_1"],
        components:{
          Nothing
        },
        mounted:function () {
          var obj = {
            currency:this.type_1.toUpperCase(),
            language:localStorage.getItem('language')
          }
          var newObj = gob.getSign(obj);
          var _this = this;
          axios.post(gob.apiUrl+'/Api/Project/index',qs.stringify(newObj)).then(function (res) {
              _this.obj = res.data.re;
          });
        },
        data:function () {
          return{
            obj:{}
          }
        },

        computed:{
          language:function () {
            return this.$store.getters.getLanguage.introduction
          },
          language_2: function () {
            return this.$store.getters.getLanguage.MainPahe
          },
        }
    }
</script>

<style scoped>
.infoMarket .infoMarketAbount{
  padding: 0.875rem !important;
  text-align: left;
  font-size: 0.928rem;
}
.infoMarket .infoMarketItem{
  border-bottom: 1px solid  rgba(255,255,255,0.2);
}
.infoMarketItemList .wallet{
  height: auto !important;
}
.infoMarketItemList .wallet span:last-child{
  width: 20rem;
  text-align: right;
}
.infoMarketItemList .wallet:after{
  display: block;
  content: " ";
  height: 0px;
  clear: both;
}
.infoMarketItemList .infoMarketItem{
  height: 2.642rem;
  padding: 0.714rem 0.875rem 0.714rem 0.875rem;
}
.infoMarketItemList .infoMarketItem:last-child{
  border-bottom: 1px solid  rgba(255,255,255,0);
}
.infoMarketItemList .infoMarketItem span{
  float: left;
  font-size: 0.928rem;
}
.infoMarketItemList .infoMarketItem span:last-child{
  float: right;
}
</style>
