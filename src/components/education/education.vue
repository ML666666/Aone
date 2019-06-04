<template>
    <div>
      <div class="edcTitleBar">
        <div @click="isVideoShow=false" v-bind:class="{'heightLight':!isVideoShow}" class="edcTitleBarItem">
          <p>{{language.article}}</p>
          <span></span>
        </div>
        <div @click="isVideoShow=true" v-bind:class="{'heightLight': isVideoShow}" class="edcTitleBarItem">
          <p>{{language.Video}}</p>
          <span></span>
        </div>
      </div>
      <template v-if="isVideoShow">
        <edcVideo></edcVideo>
      </template>
       <template v-else>
         <edcArticle></edcArticle>
       </template>
    </div>
</template>

<script>
  import edcVideo from './eduComponents/edcVideo'
  import edcArticle from './eduComponents/edcArticle'
  import comTop from '../common/BlackCommentTop'
    export default {
        name: "education",
        components:{
          comTop,
          edcArticle,
          edcVideo
        },
      computed:{
         language:function () {
           return this.$store.getters.getLanguage.Edu;
         }
        },
        watch: {
          '$route' (to, from) {

          }
       },
      data:function () {
          return{
            isVideoShow:false
          }
        },
        mounted:function () {
          $('.edcTitleBarItem').click(function () {
            $('.edcTitleBarItem').removeClass('heightLight');
            $(this).addClass('heightLight');
          })
        },
    }
</script>

<style scoped>
.edcTitleBar{
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0px;
  background: RGBA(16, 16, 16, 1);
  width: 100%;
  height: 3.03rem;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}
.edcTitleBar div{
  position: relative;
  display: inline-block;
  width: 50%;
  height: 3.03rem;
  float: left;
  line-height: 3.03rem;
  font-size: 1.071rem;
  color: #fff;
}
.edcTitleBar div p{
  transform: translate(-50%,-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
}
.edcTitleBar .heightLight span{
  display: block;
  position: absolute;
  width: 3.28571rem;
  height: 0.428rem;
  background:RGBA(26, 121, 255, 1);
  left: 50%;
  transform: translateX(-50%) skew(30deg,0deg);
  top: 1.55rem;
}
.edcBlock{
  width: 100%;
  color: #fff;
}
  .edcBlock .edcItem{
    height: 7.78rem;
    padding: 0.928rem 0.85rem 0.78rem 0.85rem ;
    border-bottom:2px solid rgba(255,255,255,0.2);
  }
 .edcBlock .edcItem .edcImg{
   display: inline-block;
   float: left;
   width: 9.57rem;
   height: 5.58rem;
 }
 .edcBlock .edcItem .edcCon{
   display: inline-block;
   float: left;
   margin-left: 0.71rem;
 }
.edcBlock .edcItem .edcCon p{
  text-align: left;
}
.edcBlock .edcItem .edcCon p:nth-child(1){
  margin-bottom: 0.71rem;
}
.edcBlock .edcItem .edcCon p:nth-child(2){
  margin-bottom: 1.5rem;
  font-size: 0.92rem;
}
.edcBlock .edcItem .edcCon p:nth-child(3){
  margin-bottom: 1.5rem;
  font-size: 0.74rem;
}

</style>


