<template>
    <div class="Interpretation" style="padding-top:3.03rem;">

      <template v-if="list.length>0" v-for="v in list">
        <router-link tag="a" :to="{name:'InterpretationDetail',query:{ id : v.id}}">
          <div class="InterpretationItem">
            <img v-if="!v.img" class="InterpretationItemImg" src="../../../assets/market/marketDefault.png" />
            <img v-if="v.img" class="InterpretationItemImg" :src="v.img" />
            <div class="textContainer">
              <div class="title">
                {{v.big_title}}
              </div>
              <p class="about">
                <span style="float: left">{{v.cdate}}</span>
                <span style="float: right; display: none"><img src="../../../assets/market/eyes.png" height="12" width="18"/>6320</span>
              </p>
            </div>
          </div>
        </router-link>
      </template>

      <Nothing v-if="list.length == 0"></Nothing>

    </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import Nothing from "../../common/Nothingblock"
  export default {
    name: "interpretation",
    components:{
      Nothing
    },
    mounted:function () {
      var _this = this;
      $(window).on('scroll',this.getMore_1);
      this.getData(1);
    },
    data:function () {
      return{
         page:1,
         list:[],
         nBodyHight:$('body').height()
      }
    },
    beforeDestroy:function () {
      $(window).off('scroll',this.getMore_1);
    },
    methods:{
      getMore_1(){
        this.nWindowHight = $(window).height();
        this.nScrollTop = $(document).scrollTop();
        var _this = this;
        if(parseInt(this.nBodyHight + this.nScrollTop)+1 > parseInt($("body").height())){
          _this.getData(0);
        }
      },
      getData(index){
        if(index){
          var obj = {
            page:1,
            size:10,
            type:2,
            language:localStorage.getItem('language')
          }
          let newObj = gob.getSign(obj);
          let _this  = this;
          axios.post(gob.apiUrl + '/Api/News/news',qs.stringify(newObj)).then(function (res) {
            for (var i = 0;i<res.data.re.length;i++){
              var index  = res.data.re[i].cdate.indexOf(" ");
              res.data.re[i].cdate = res.data.re[i].cdate.substring(0,index);
              if(res.data.re[i].img){
                res.data.re[i].img = gob.webUrl + res.data.re[i].img;
              }
            }
            _this.list = res.data.re;
            _this.$store.commit('setInterpreTationList',_this.list);
          });
        }else{
          var obj = {
            page:this.page,
            size:10,
            type:2,
            language:localStorage.getItem('language')
          }
          let newObj = gob.getSign(obj);
          let _this  = this;
          axios.post(gob.apiUrl + '/Api/News/news',qs.stringify(newObj)).then(function (res) {
            for (var i = 0;i<res.data.re.length;i++){
              var index  = res.data.re[i].cdate.indexOf(" ");
              res.data.re[i].cdate = res.data.re[i].cdate.substring(0,index);
              if(res.data.re[i].img){
                res.data.re[i].img = gob.webUrl + res.data.re[i].img;
              }
              _this.list.push(res.data.re[i]);
            }
            _this.page++;
            _this.$store.commit('setInterpreTationList',_this.list);
          });
        }
      }
    }
  }
</script>

<style scoped>
  .Interpretation a:last-child .InterpretationItem{
    border-color: transparent;
  }
  .InterpretationItem{
    width: 100%;
    min-height: 8.64rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-left: 0.856rem;
    padding-top: 0.856rem;
    padding-bottom: 0.856rem;
    color: #fff;
  }
  .InterpretationItem:after{
    display: block;
    content: " ";
    clear: both;
    height: 0px;
  }
  .InterpretationItemImg{
    width:9.14rem;
    height:6.857rem;
    float: left;
    display: inline-block;
    margin-right: 24px;
  }
  .textContainer{
    width: 14rem;
    height:6.857rem;
    float: left;
    position: relative;
  }
  .textContainer .title{
    font-size: 1rem;
    text-align: left;
  }
  .textContainer .about{
    width:14rem;
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    font-size: 0.857rem;
  }
  .textContainer .about img{
    width:1rem;
    margin-right: 5px;
    transform: translateY(-0.1rem);
  }
</style>
