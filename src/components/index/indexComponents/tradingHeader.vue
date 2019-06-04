<template>
  <div class="dataShowBlock">
    <div class="dataShowBlock_left">
      <p>{{language.Balance}}&nbsp;:&nbsp;{{getBalance}}&nbspUSDT</p>
      <p>{{language.Self_holding}}&nbsp;:&nbsp;{{getHandSum}}&nbsp{{language.hands}} </p>
      <!--<div class="rateBar">-->
      <!--</div>-->
    </div>
    <div class="dataShowBlock_right">
      <div class="toOpen">{{getGameTips}}</div>
      <div class="toOpenTime">{{getTime}}<b>s</b></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "trading-header",
        props:{
          handNumber:{
            type:Number
          }
        },
       mounted:function () {
         this.$store.commit('sethandSum');
       },
        data:function () {
          return{
            userDetial:JSON.parse(localStorage.getItem('game_2_UserData'))
          }
        },
        watch:{
          getBalance:function (val,oldval) {
            this.userDetial = val;
            var obj = JSON.parse(localStorage.getItem('game_2_UserData'));
            obj.balance = val;
            localStorage.setItem('game_2_UserData',JSON.stringify(obj));
          },
        },
        computed:{
          language:function () {
            return this.$store.getters.getLanguage.MainPahe;
          },
          getBalance:function () {
            if(this.$store.getters.getBalance){
              return this.$store.getters.getBalance
            }else{
              if(localStorage.getItem('game_2_UserData')){
                return JSON.parse(localStorage.getItem('game_2_UserData')).balance;
              }else{
                return "0.0000"
              }
            }
          },
          language:function () {
            return this.$store.getters.getLanguage.MainPahe;
          },
          winningPercent:function () {
            return this.$store.getters.getWinningPercent
          },
          getTime:function () {
            return this.$store.getters.getTime
          },
          getGameTips:function () {
            return this.$store.getters.getGameTips
          },
          getRound:function () {
            return this.$store.getters.getRound
          },
          getHandSum:function () {
            return this.$store.getters.getHandSum
          }
        }
    }
</script>

<style scoped>

</style>
