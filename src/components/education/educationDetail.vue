<template>
  <div style="padding-bottom: 4rem"  v-if="getEduArticleObj">
    <comTop>{{language.edu}}</comTop>
    <div class="edcWrapper">
      <div class="h_1wrapper">
        <h1>
          {{getEduArticleObj.big_title}}
          <p>{{getEduArticleObj.big_title}}</p>
          <span></span>
        </h1>
      </div>
      <p  class="edcTime">{{getEduArticleObj.cdate}}</p>
      <div class="edcArtcleWrapper" v-html="getEduArticleObj.small_title">
          {{getEduArticleObj.small_title}}
      </div>
    </div>
  </div>
</template>

<script>
  import comTop from '../common/commentTop'
  export default {
    name: "education-detail",
    components:{
      comTop
    },
    mounted:function () {
      if(this.getEduArticleList.length){
        this.$store.commit('setEduArticle',this.$route.query.id);
      }else{
        this.$store.dispatch('actionEduArticle');
      }
    },
    computed:{
      getEduArticleList:function () {
        return this.$store.getters.getEduArticleList
      },
      getEduArticleObj:function () {
        return this.$store.getters.getEduArticleObj
      },
      language:function () {
        return this.$store.getters.getLanguage.Edu
      }
    },
    watch:{
      getEduArticleList:function (val,oldval) {
        if(val.length){
          this.$store.commit('setEduArticle',this.$route.query.id);
        }
      }
    }
  }
</script>

<style scoped>
.edcWrapper{
  padding: 4.222rem 0.857rem 4.58rem 0.857rem;
}
.edcWrapper *{
  text-align: left;
  color: #fff;
}
.edcWrapper .h_1wrapper{
  height: 1.3rem;
}
.edcWrapper h1{
  position: relative;
  font-size: 1rem;
  display: inline-block;
  float: left;
  color: transparent;
  margin-left: 0.5rem;
}
.edcWrapper h1 p{
  position: absolute;
  transform: translate(-50%,-50%);
  top:50%;
  left: 50%;
  color: #fff !important;
  width: 100%;
  z-index: 99;
}
.edcWrapper h1 span{
  width: 110%;
  position: absolute;
  bottom: 0.1rem;
  left: 50%;
  height: 0.428rem;
  background: RGBA(24, 110, 231, 1);
  transform:translateX(-50%) skew(30deg,0deg);
}
.edcWrapper .edcTime{
  margin-top:0.624rem;
  margin-bottom: 0.857rem;
  font-size: 0.785rem;
}
.edcWrapper.edcArtcle{
  font-size: 0.857rme;
}
.edcWrapper img{
  width:14.714rem;
  display: block;
  height: auto;
  margin: 0.857rem auto;
}

.edcArtcleWrapper  img{
  width:14.724rem;
  height:8.892rem;
}
</style>
