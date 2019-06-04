<template>
    <div class="isWinPage winPage">
      <img style="width: 100%;height: auto" src="../../../assets/isWin/win.png"/>
      <img class="close" @click="close" src="../../../assets/isWin/close.png" height="40" width="40"/>
      <img class="winTips" src="../../../assets/isWin/winTips.png" style="width: 22.92rem; height: auto"/>
    </div>
</template>

<script>
    export default {
        name: "win-page",
      methods:{
        close:function () {
          $(".isWinPage").fadeOut();
        }
      }
    }
</script>

<style scoped>
  .isWinPage{
    display: none;
    position: absolute;
    top: 0px;
    width: 26.785rem;
    background:rgba(0,0,0,0.9);
    z-index: 1000;
  }
  .winTips{
    position: absolute;
    top: 17.28rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .isWinPage .close{
    position: absolute;
    width: 1.428rem;
    height: auto;
    right: 1.142rem;
    top:1.5rem;
  }
</style>
