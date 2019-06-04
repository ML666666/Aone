<template>
    <div class="commentTop">
    <div @click="back" class="commentBack">
      <img src="../../assets/commentImg/WitArrow_#.png"/>
    </div>
    <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "comment-top",
        methods:{
          back:function () {
            this.$router.goBack()
          }
        },
        mounted:function () {
          $('.commentTop').css('opacity','1');
        }
    }
</script>

<style scoped>
  .commentTop{
    opacity: 0;
    position: fixed;
    top: 0px;
    left: 0px;
    display: block;
    margin: 0 auto;
    width:100%;
    height: 3.1428rem;
    background: RGBA(16, 16, 16, 1);
    z-index: 100;
    text-align: center;
    line-height: 3.1428rem;
    color: #fff;
    font-size: 1.07rem;
    font-family: PingFang-SC-Regular;
    color: rgba(255,255,255,1);
    border-bottom: 1px solid rgba(255,255,255,0.3);
  }
  .commentBack{
    position: absolute;
    left: 0px;
    top:0px;
    height:3.1428rem;
    width:3.1428rem;
   }
  .commentBack img{
    width: 0.7rem;
    height: auto;
    margin-top: 1rem;
   }
</style>
