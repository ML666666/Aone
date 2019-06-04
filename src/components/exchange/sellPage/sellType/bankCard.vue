<template>
<div>
  <div class="inputWrapper">
    <span class="tips">开户名</span>
    <input type="text"/>
  </div>
  <div class="inputWrapper">
    <span class="tips">开户行</span>
    <input type="text"/>
  </div>
  <div class="inputWrapper">
    <span class="tips">账号</span>
    <input type="text"/>
  </div>

  <div @click="toSellDetail" class="btn">
    确认出售
  </div>

</div>
</template>

<script>
    export default {
        name: "bang-card",
        methods:{
          toSellDetail:function () {
            this.$router.push({ name: 'sellDetail'})
          }
        }
    }
</script>

<style scoped>

</style>
