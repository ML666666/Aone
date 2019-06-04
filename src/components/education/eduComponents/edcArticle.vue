<template>
  <div style="padding-top: 3.03rem;" class="edcBlock">
    <commentTop>文章</commentTop>
    <template v-if="getEduArticleList.length>0"  v-for="v in getEduArticleList">
      <router-link tag="div" :to="{name:'educationDetail',query:{ id : v.id}}">
      <div class="edcItem">
        <img class="edcImg" v-if="v.img" :src="v.img"/>
        <img class="edcImg" v-else src="../../../assets/eduction/eduImg.png"/>
        <span class="edcCon">
            <p>{{v.big_title}}</p>
            <!--<p>全文干货，手把手教你如何交易</p>-->
            <p style="position: absolute;
                    width: 14rem;
                    bottom: -0.6rem;">
              <span style="float: left;transform: translateY(-15%); color: transparent">By 知笔墨</span>
              <span style="float: right">{{v.cdate | setTime}}</span>
            </p>
          </span>
       </div>
      </router-link>
    </template>
    <template v-if="getEduArticleList.length==0" >
      <Nothing></Nothing>
    </template>
  </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import { Indicator } from 'mint-ui';
  import gob from "../../../store/config.js";
  import Nothing from "../../common/Nothingblock"
  import commentTop from "../../common/commentTop"
    export default {
        name: "edc-article",
        components:{
          Nothing,
          commentTop
        },
        mounted:function () {
          this.$store.dispatch('actionEduArticle');
        },
        computed:{
          getEduArticleList:function () {
            return this.$store.getters.getEduArticleList
          },
        },
        filters:{
          setTime(value){
            return value.substring(0,value.indexOf(" "));
          }
        }
    }
</script>

<style scoped>
  .edcBlock{
    width: 100%;
    color: #fff;
    margin-bottom: 4rem;
  }
  .edcBlock .edcItem{
    height: 7.78rem;
    padding: 0.928rem 0.85rem 0.78rem 0.85rem ;
    border-bottom:2px solid rgba(255,255,255,0.2);
    position: relative;
  }
  .edcBlock div:last-child .edcItem{
    border-bottom:2px solid transparent;
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
    height: 5.58rem;
    line-height: 5.58rem;
    width: 14.rem;
    white-space: nowrap;
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
