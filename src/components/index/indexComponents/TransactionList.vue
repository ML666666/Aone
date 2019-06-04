<template>
    <div style="padding-bottom: 2rem">
      <ul class="TypeBar">
        <li>{{language.User}}</li>
        <li>{{language.Currency}}</li>
        <li>{{language.Buy_and_sell}}</li>
        <li>{{language.hands}}</li>
        <li>{{language.Currency_amount}}</li>
      </ul>
      <div class="UserMatchDataConteiner">
        <ul>
          <p style="color: rgba(255,255,255,0.4)" v-if="getTransactionList.length == 0">
            ～{{language.No_data}}～
          </p>
          <template v-for="v in getTransactionList">
            <li>
              <span style="width: 3.9rem;" class="userPhone">{{v.username}}</span>
              <span class="moneyType">{{v.buy_product_name}}</span>
              <span v-if="v.buy_direct == 1 " class="matchType Uptype">{{language.Buy}}</span>
              <span v-if="v.buy_direct == -1 " class="matchType DownType">{{language.Sell}}</span>
              <span class="matchNumber">{{v.buy_count}}{{language.hands}}</span>
              <span class="matchMoney">{{v.orig_point}}</span>
            </li>
          </template>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "transaction-list",
        computed: {
          getTransactionList: function () {
            return this.$store.getters.getTransactionList;
          },
          language:function () {
            return this.$store.getters.getLanguage.MainPahe;
          },
        },
    }
</script>

<style scoped>

</style>
