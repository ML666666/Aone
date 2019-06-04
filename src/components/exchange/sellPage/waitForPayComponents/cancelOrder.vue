<template>
    <div class="cancelOrderMask">
         <div class="tips">
           订单取消成功
         </div>
    </div>
</template>

<script>
    export default {
        name: "cancel-order"
    }
</script>

<style scoped>
.cancelOrderMask{
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1000;
  background: rgba(0,0,0,0.7);
}
.cancelOrderMask .tips{
    position: absolute;
    left: 50%;
    top: 15rem;
    transform: translateX(-50%);
    padding: 0.714rem 1.785rem;
    font-size:1rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    background: RGBA(255, 255, 255, 1);
}
</style>
