<template>
    <div class="BlackCommentTop">
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
        }
    }
</script>

<style scoped>
  .BlackCommentTop{
    position: relative;
    display: block;
    margin: 0 auto;
    width:26.7857rem;
    height:3.1428rem;;
    text-align: center;
    line-height: 3.1428rem;
    color: #fff;
    background:#080808;
    font-size:1.07rem;
    font-family:PingFang-SC-Regular;
    color:rgba(255,255,255,1);
    border-bottom:1px solid rgba(255,255,255,0.4);
  }
</style>
