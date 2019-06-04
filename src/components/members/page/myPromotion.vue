<template>
  <div class="myPomotion">
  <div class="myPomotionTop">
    <div class="myPomotionTopUP">
      <img @click="back" src="../../../assets/commentImg/WitArrow_#.png"/>
      <span style="
       font-size: 1.07rem;
       color: #FFF;
       transform: translateY(-50%);
       display: inline-block;
      ">{{language.title}}</span>
      <router-link to="/members/PomotionRude">{{language.Rules}}?</router-link>
    </div>
    <!--<div class="myPomotionTopTips">-->
      <!--我的收益：{{getPromote.total}} USDT-->
    <!--</div>-->
    <div class="myPomotionTopTips myPomotionTopTips_2">
      {{language.Call_friends}}
    </div>
    <div class="FriendStartBlock">
      <router-link to="/members/myTeam">
       <div class="FriendStartBlockItem">
         <p style="margin-bottom: 0.3rem;">{{getPromote.teamMateCount}}</p>
         <p>{{language.My_teammates}}</p>
         <div class="FriendStartBlockSplitLine"></div>
       </div>
      </router-link>
      <!--<router-link  to="/members/PomotionRude">-->
       <!--<div class="FriendStartBlockItem">-->
         <!--<div class="FriendStartBlockSplitLine"></div>-->
         <!--<p><img style="width: 0.857rem; height: auto" src="../../assets/members/star.png" /></p>-->
         <!--<p>推广星级</p>-->
         <!--<div style="right: 0px" class="FriendStartBlockSplitLine"></div>-->
       <!--</div>-->
      <!--</router-link>-->
      <router-link to="/members/myTeam">
        <div class="FriendStartBlockItem">
          <p style="margin-bottom: 0.3rem;">{{getPromote.total}} USDT</p>
          <p>{{language.My_Income}}</p>
        </div>
      </router-link>
    </div>
  </div>
  <div class="QtCodeBlock">
     <div class="QtCodeBlockArrow QtCodeBlockArrow_top"></div>
     <div class="QtCodeBlockArrow QtCodeBlockArrow_bottom"></div>
     <canvas id="QTCODE"></canvas>
  </div>
  <div class="MyPomotionCode">{{language.My_promotional_codes}}：&nbsp {{getPromote.code}}</div>
  </div>
</template>

<script>
  import QRCode from 'qrcode'
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  export default {
        name: "my-promotion",
        mounted:function () {
          this.$store.dispatch('actionPromote');
        },
        computed:{
          getPromote:function () {
            return this.$store.getters.getPromote;
          },
          language:function () {
            return this.$store.getters.getLanguage.My_promotion
          },
        },
        watch:{
          getPromote:function (val) {
            this.useqrcode(val.code);
          }
        },
        methods:{
          useqrcode(code){
            this.QueryURL= gob.webUrl+'#/register?code='+code;
            var canvas = document.getElementById('QTCODE');
            QRCode.toCanvas(canvas, this.QueryURL, function (error) {
              if (error) console.error(error)
              console.log('success!');
            });
          },
          back:function () {
            this.$router.goBack()
          }
        },
       data:function () {
         return{
           QueryURL:""
         }
       }
    }
</script>

<style scoped>
  .FriendStartBlockSplitLine{
    position: absolute;
    width:1px;
    height:1.42rem;
    opacity:0.39890000000000003;
    background: rgba(255,255,255,1);
    top: 1rem;
    right: 0px;
  }
  .myPomotion{
    width:26.7857rem;
    margin: 0 auto;
  }
 .myPomotionTop{
   height: 10.85714rem;
   background:RGBA(8, 8, 8, 1);
   position: relative;
 }
 .myPomotionTopUP{
   height: 3.1428rem;
   box-sizing: border-box;
   padding-top: 1.5714rem;
   border-bottom:1px solid rgba(255,255,255,0.3);
 }
  .myPomotionTopUP img{
    display: inline-block;
    float: left;
    transform: translateY(-50%);
    width: 0.75rem;
    height: auto;
    margin-left: 1.21428rem;
  }
  .myPomotionTopUP a{
    display: inline-block;
    float: right;
    transform: translateY(-50%);
    margin-right: 0.5rem;
    font-size:0.9285rem;
    font-family:PingFang-SC-Regular;
    color:rgba(255,255,255,1);
    border-bottom: 1px solid;
  }
  .myPomotionTopTips{
    text-align: left;
    font-size:0.9285rem;
    font-family:PingFang-SC-Regular;
    color:rgba(255,255,255,1);
    padding-left:1.21428rem;
    margin-top: 0.9285rem;;
  }
  .myPomotionTopTips_2{
    margin-top: 0.66666rem;
    font-size: 0.928rem;
    color: rgba(255,255,255,0.8);
    font-size: 0.857rem;
    margin-top: 2.214rem;
    margin-bottom: 2.214rem;
  }
  .FriendStartBlock{
    height:3.57rem;
    border-radius: 3px;
    /*box-shadow:0px 11px 30px 0px rgba(26,121,255,0.79);*/
  }
  .FriendStartBlockItem{
    display: inline-block;
    float: left;
    width: 50%;
    height:3.57rem;
    padding-top: 0.5rem;
    color: #fff;
    position: relative;
  }
  .FriendStartBlockItem:first-child{
    margin-bottom: 0.3rem;
  }
  .FriendStartBlockItem p {
    line-height: 1.025rem;
    height: 1.025rem;
  }
  .QtCodeBlock{
    margin: 0 auto;
    width:16.5rem;
    height: 16.5rem;
    margin-top:7.78571rem;
    position: relative;
  }
  .QtCodeBlockArrow{
    height: 3.571rem;
    width: 3.571rem;
    box-sizing: border-box;
    position: absolute;
    z-index: 200;
  }
  .QtCodeBlockArrow_top{
    top:-0.6rem;
    right: -0.6rem;
    border-right: 0.285714rem solid RGBA(26, 121, 255, 1);
    border-top: 0.285714rem solid RGBA(26, 121, 255, 1);
    border-radius: 3px;
  }
  .QtCodeBlockArrow_bottom{
    bottom:-0.6rem;
    left: -0.6rem;
    border-left: 0.285714rem solid RGBA(26, 121, 255, 1);
    border-bottom: 0.285714rem solid RGBA(26, 121, 255, 1);
    border-radius: 3px;
  }
  #QTCODE{
    width: 16.5rem !important;
    height: 16.5rem !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
  }
  .MyPomotionCode{
    text-align: center;
    margin-top:2.571rem ;
    font-size: 1.1428rem;
    color: RGBA(255, 255, 255, 1);
  }
</style>
