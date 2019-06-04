<template>
  <div class="NothingBlock">
    <img src="../../assets/commentImg/nothing.png"/>
    <b>~</b> {{language.No_data}} <b>~</b>
  </div>
</template>

<script>
    export default {
        name: "nothingblock",
        computed: {
          language: function () {
            return this.$store.getters.getLanguage.MainPahe
          },
        }
    }
</script>

<style scoped>
  .NothingBlock{
    color:#fff;
    font-size: 0.928rem;
  }
  .NothingBlock img{
    display: block;
    margin: 0 auto;
    width: 11.428rem;
    margin-top: 13.5rem;
    margin-bottom: 1.428rem;
  }
</style>
