<template>
  <div style="padding-top: 3.417rem">
    <top>
      出售订单
    </top>
    <div class="sell_order_list">

      <div class="sell_order_list_item">
        <p class="Date">2018-7-31</p>
        <div class="sell_order_list_item_Detail">
          <p>
            <span class="">订单号：123456789</span>
            <span style="color: RGBA(26, 121, 255, 1)">已收款</span>
          </p>
          <p>
            <span>买家 Sun 购买1200 CNY（183 USDT）</span>
            <span>总价：653 CNY</span>
          </p>
          <div class="MakeSureWrapper">
             <div class="btn">
               确认放币
            </div>
           </div>
        </div>
      </div>

      <div class="sell_order_list_item">
        <p class="Date">2018-7-31</p>
        <div class="sell_order_list_item_Detail">
          <p>
            <span class="">订单号：123456789</span>
            <span style="color: RGBA(26, 121, 255, 1)">已收款</span>
          </p>
          <p>
            <span>买家 Sun 购买1200 CNY（183 USDT）</span>
            <span>总价：653 CNY</span>
          </p>
          <div class="MakeSureWrapper">
            <div class="btn">
              确认放币
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
  import top from '../../common/commentTop'
    export default {
        name: "sell_order_list",
        components:{
          top
        }

    }
</script>

<style scoped>
.sell_order_list_item{
  color: #fff;
}
.sell_order_list_item .Date{
  height: 3.714rem;
  padding-top: 1.428rem;
  padding-left: 0.857rem;
  font-size: 1rem;
  text-align: left;
}
.sell_order_list_item  .sell_order_list_item_Detail{
  box-shadow:0px 0px 0.714rem 0px rgba(41,46,50,1);
}
.sell_order_list_item  .sell_order_list_item_Detail p{
  height: 2.571rem;
  box-sizing: border-box;
  padding: 0 0.8571rem;
  padding-top: 1.285rem;
}
.sell_order_list_item  .sell_order_list_item_Detail p span{
  display: inline-block;
  float: left;
  transform: translateY(-50%);
  font-size:0.927rem;
}
.sell_order_list_item  .sell_order_list_item_Detail p span:last-child{
  float: right;
}
.sell_order_list_item  .MakeSureWrapper{
  padding-top:0.857rem;
  padding-bottom: 0.857rem;
  padding-right: 0.857rem;
  border-top: 1px solid RGBA(255, 255, 255, 0.2);
}
.sell_order_list_item  .MakeSureWrapper:after{
  display: block;
  clear: both;
  height: 0px;
  content: " ";
}
.sell_order_list_item  .MakeSureWrapper .btn{
  float: right;
  width:5rem;
  height:1.571rem;
  line-height: 1.571rem;
  border-radius:30px;
  border:1px solid #fff;
  font-size: 0.928rem;
}
</style>
