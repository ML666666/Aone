<template>
<div class="infoProjectIntroduction">

  <template v-if="list.length>0" v-for=" v in list">
    <div class="infoProjectIntroductionItem">
      <div class="time">{{v.cdate | time}}</div>
      <div class="title">
        {{v.big_title}}
      </div>
      <div class="con">
        {{v.small_title}}
      </div>
    </div>
  </template>
  <template v-if="list.length == 0">
    <p style="margin-top: 2rem">
      <b>~</b> {{language_2.No_data}} <b>~</b>
    </p>
  </template>
</div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import { Indicator } from 'mint-ui';
  import gob from "../../../store/config.js";
  import Nothing from '../../common/Nothingblock'
    export default {
        name: "project-introduction",
        props:["type_1"],
        mounted:function () {
          this.getData();
        },
        components:{
          Nothing
        },
        filters:{
          time:function (value) {
            return  value.substring(value.indexOf(" "),value.lastIndexOf(":"))
          }
        },
        computed:{
          language_2: function () {
            return this.$store.getters.getLanguage.MainPahe
          },
        },
        methods:{
          getData:function () {
            var _this = this;
            var obj = {
              currency:this.currency,
              page:this.page,
              size:10,
              language:localStorage.getItem('language')
            }
            var newObj = gob.getSign(obj);
            axios.post(gob.apiUrl+'/Api/News/news',qs.stringify(newObj)).then(function (res) {
              _this.list = res.data.re;
            });
            this.page++;
          }
        },
        data:function () {
          return{
            page:1,
            list:[],
            currency:this.type_1
          }
        }
    }
</script>

<style scoped>
  .infoProjectIntroductionItem{
    font-size: 0.928rem;
    padding: 0.785rem 0.785rem 0rem 0.785rem;
  }
  .infoProjectIntroductionItem .time{
    height:1.28rem;
    margin-bottom: 0.714rem;
    background: url("../../../assets/market/time.png") no-repeat left center;
    background-size: 3.53rem;
    line-height: 1.6rem;
    text-align: left;
    font-size: 0.875rem;
    padding-left: 0.875rem;
  }
  .infoProjectIntroductionItem .title{
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    margin-top: 0.714rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    -webkit-transform: translateX(-0.4rem);
    transform: translateX(-0.4rem);
    white-space: nowrap;
    margin-bottom: 0.571rem;
    text-align: left;
    font-size: 1rem;
  }
  .infoProjectIntroductionItem .con{
    text-align: left;
  }
</style>
