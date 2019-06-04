<template>
    <div class="sellCommentBtn">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "btn"
    }
</script>

<style scoped>
.sellCommentBtn{
  display: block;
  margin: 0 auto;
  width:8.57rem;
  height:2.14rem;
  text-align: center;
  line-height: 2.14rem;
  background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
  border-radius:1.28rem;
  color: #fff;
  font-size: 1rem;
}
</style>
