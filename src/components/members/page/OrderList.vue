
<template>
 <div  style="padding-top: 3.1428rem;" class="OrderList">
   <comTop>
     {{language.title}}
   </comTop>
   <template  v-if="getOrderList.length != 0"  v-for="v in getOrderList">
   <div class="orderItem">
     <div class="orderItemTime">
       {{v.time}}
     </div>
     <div class="itemGroun">
       <template v-for="v in v.array">
       <div class="item">
         <div class="itemContainer">
           <img v-if="v.buy_product_name == 'BTC'" src="../../../assets/members/BTC.png" />
           <img v-if="v.buy_product_name == 'ETH'" src="../../../assets/members/ETH.png" />
           <img v-if="v.buy_product_name == 'LTC'" src="../../../assets/members/LTC.png" />
           <p v-if="v.coin == 'BTC'" style="margin-bottom: 0.5rem">{{language.BTC}}</p>
           <p v-if="v.coin == 'ETH'" style="margin-bottom: 0.5rem">{{language.ETH}}</p>
           <p v-if="v.coin == 'LTC'" style="margin-bottom: 0.5rem">{{language.LTC}}</p>
           <p>
             <span v-if="v.buy_direct==1">{{language.Buy_and_Sell}}：{{language.Sell}}</span>
             <span v-else="v.buy_direct==0">{{language.Buy_and_Sell}}：{{language.Buy}}</span>
             <span style="padding-left: 1rem">{{language.Number_of_hands}}：{{v.buy_count}}{{language.H}}</span>
             <span>{{v.orig_point}}USDT</span>
           </p>
           <div v-if="v.complete_fee>0" class="win">{{language.WIN}}</div>
           <div v-else class="lose">{{language.LOSE}}</div>
         </div>
       </div>
       </template>
     </div>
   </div>
   </template>
   <template   v-if="getOrderList.length == 0">
     <div class="NothingBlock">
       <Nothingblock></Nothingblock>
     </div>
   </template>
 </div>
</template>

<script>
  import comTop from '../../common/commentTop'
  import Nothingblock from '../../common/Nothingblock'
  import axios from "axios";
  import qs from "qs";
  import { Indicator } from 'mint-ui';
  import gob from "../../../store/config.js";
    export default {
        beforeCreate:function () {
          Indicator.open();
        },
        name: "order-list",
        components:{
          comTop,
          Nothingblock
        },
        data:function () {
          return{
            getOrderList:[]
          }
        },
        filters:{
          moneyType:function (value) {
            switch (value){
              case "BTC":
                return "比特币(BTC)";
                break;
              case "LTC":
                return "莱特币(LTC)";
                break;
              case "ETH":
                return "以太坊(ETH)";
                break;
            }
          }
        },
        mounted:function () {
          var obj = {
            userid: JSON.parse(localStorage.getItem('game_2_UserData')).id,
            token: JSON.parse(localStorage.getItem('game_2_UserData')).token,
          }
          var _this = this;
          var newObj = gob.getSign(obj);
          axios.post(gob.apiUrl+'/Api/Member/userOrders',qs.stringify(newObj)).then(function (res) {
            if(gob.isOutLogin(res)){
              if(res.data.re){
                let s = new Set();
                for(var i = 0; i<res.data.re.length; i++){
                  res.data.re[i].cdate = res.data.re[i].cdate.substring(0,res.data.re[i].cdate.indexOf(" "));
                  s.add(res.data.re[i].cdate);
                }
                var num = [...s];
                for(var w = 0; w<num.length;w++){
                  var obj = {
                    time:null,
                    array:[]
                  };
                  obj.time = num[w];
                  for(var k = 0; k<res.data.re.length; k++){
                    if(res.data.re[k].cdate == num[w]){
                      obj.array.push(res.data.re[k])
                    }
                  }
                  _this.getOrderList.push(obj);
                }
              }else{
                _this.getOrderList.length = 0;
              }
            }
            Indicator.close();
          })
        },
        computed:{
         language:function () {
           return this.$store.getters.getLanguage.Order_details
         },
        },
    }
</script>

<style scoped>
  .OrderListItem span{
    display: inline-block;
    float: left;
    width: 20%;
    line-height: 2.85714rem;
    text-align: center;
    font-size:1rem;
    font-family:PingFang-SC-Regular;
    color:rgba(51,51,51,1);
  }
  .itemGroun{
    box-shadow: 0px 0px 20px 0px rgba(41,46,50,1);
  }
  .orderItemTime{
    text-align: left;
    color: #fff;
    font-size: 1rem;
    padding: 1.142rem 0rem 0.5rem 0.857rem;
  }
  .orderItem .item{
    height: 4.64rem;
    border-bottom: 1px solid  rgba(255,255,255,0.2);
    background: RGBA(8, 8, 8, 1);
  }
  .orderItem .item:first-child{
    border-top: 1px solid  rgba(255,255,255,0);
  }
  .orderItem .item:last-child{
    border-bottom: 1px solid  rgba(255,255,255,0);
  }
  .orderItem .itemContainer img{
    width: 2.14rem;
    height: 2.14rem;
    position: absolute;
    left: 0.875rem;
    top:1.357rem;
  }
  .orderItem .itemContainer{
    position: relative;
    padding-left: 3.51rem;
    text-align: left;
    color: #fff;
    padding-top: 0.875rem;
  }
  .orderItem .itemContainer p{
    text-align: left;
    font-size: 1rem;
  }
  .orderItem .itemContainer p span{
    font-size: 0.785rem;
  }
  .orderItem .itemContainer .win{
    color: RGBA(254, 123, 131, 1);
    position: absolute;
    right: 0.857rem;
    top: 1.5rem;
  }
  .orderItem .itemContainer .lose{
   color: RGBA(244, 180, 133, 1);
    position: absolute;
    right: 0.857rem;
    top: 1.5rem;
  }
</style>
