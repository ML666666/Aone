<template>
    <div>
      <div class="inputWrapper">
        <span class="tips">微信号</span>
        <input type="text"/>
      </div>

      <p class="ZFBwrapperType">
        微信收款码
      </p>

      <label class="getQtCode">
        <p>请上传您的微信收款码</p>
        <p>图片格式：PNG;JPG;JPEG</p>
      </label>

      <div @click="toSellDetail" class="btn">
        确认出售
      </div>
    </div>
</template>

<script>
    export default {
        name: "weixin",
        methods:{
         toSellDetail:function () {
           this.$router.push({ name: 'sellDetail'})
          }
        }
    }
</script>

<style scoped>

</style>
