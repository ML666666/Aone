<template>
  <div>

    <div class="inputWrapper">
      <span class="tips">用户名</span>
      <input type="text"/>
    </div>

    <div class="inputWrapper">
      <span class="tips">支付宝账号</span>
      <input type="text"/>
    </div>


    <p class="ZFBwrapperType">
      支付宝收款码
    </p>

    <label class="getQtCode">
      <p>请上传您的支付宝收款码</p>
      <p>图片格式：PNG;JPG;JPEG</p>
    </label>

    <div @click="toSellDetail" class="btn">
      确认出售
    </div>

  </div>
</template>

<script>
  export default {
    name: "zfb",
    methods:{
      toSellDetail:function () {
        this.$router.push({ name: 'sellDetail'})
      }
    }
  }
</script>

<style scoped>

</style>
