<template>
  <div class="QtCodeMask">
    <div class="QtCode">
    </div>
    <div class="tips">
      长按识别二维码去付款
    </div>
  </div>

</template>

<script>
    export default {
        name: "qt-code"
    }
</script>

<style scoped>
  .QtCodeMask{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1000;
    background: rgba(0,0,0,0.7);
  }
  .QtCodeMask .QtCode{
    width:11.428rem;
    height:11.428rem;
    background: #fff;
    margin: 0 auto;
    margin-top: 13.928rem;
  }
  .QtCodeMask .tips{
    margin: 0 auto;
    text-align: center;
    font-size:0.857rem;
    color: #fff;
    margin-top: 1.428rem;
  }
</style>
