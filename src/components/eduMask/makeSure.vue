<template>
<div @click="nextStep" class="stepMakeSureBtn">
  {{language.gotIt}}
</div>
</template>

<script>
    export default {
        name: "make-sure",
        methods:{
          nextStep:function () {
            this.$store.commit('aboutAone');
          }
        },
        computed:{
         language:function () {
           return this.$store.getters.getLanguage.aboutMe
         },
        },
    }
</script>

<style scoped>
.stepMakeSureBtn{
  margin: 0 auto;
  width:8.14rem;
  height:2.8571rem;
  border-radius:40px;
  border:1px solid rgba(151,151,151,1);
  font-size: 1.571rem;
  line-height: 2.8571rem;
  text-align: center;
}
</style>
