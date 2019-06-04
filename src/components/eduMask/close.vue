<template>
  <img @click="close" class="eduMaskCloseBtn" src="../../assets/eduMask/btn.png" height="37" width="37"/>
</template>

<script>
    export default {
        name: "close",
        methods:{
          close:function () {
            this.$store.commit('aboutAone',1);
          }
        }
    }
</script>

<style scoped>
.eduMaskCloseBtn{
  width: 1.166rem !important;
  height: 1.166rem !important;
  display: block;
  margin: 0 auto !important;
  transform: rotate(0deg) !important;
}
</style>
