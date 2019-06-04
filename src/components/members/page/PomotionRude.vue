<template>
    <div  style="padding-top: 3.1428rem; padding-bottom: 3.142rem" class="PomotionRule">
      <comTop>
        {{language.Rules}}
      </comTop>
      <!--<div class="PomotionRuleGround">-->
          <!--<div class="PomotionRuleGroundItem">-->
            <!--<div class="startGround">-->
              <!--<span class="startGroundTips">一星推广员</span>-->
              <!--<span class="start">-->
                <!--<img src="../../assets/members/star.png"/>-->
                <!--<img src="../../assets/members/lowStar.png" />-->
                <!--<img src="../../assets/members/lowStar.png" />-->
              <!--</span>-->
            <!--</div>-->
            <!--<div class="startGroundTips">-->
              <!--<span>升级条件</span>-->
              <!--<span style="float: right">好友交易1-999手</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--<div class="PomotionRuleGroundItem">-->
          <!--<div class="startGround">-->
            <!--<span class="startGroundTips">二星推广员</span>-->
            <!--<span class="start">-->
               <!--<img src="../../assets/members/star.png"/>-->
               <!--<img src="../../assets/members/star.png"/>-->
               <!--<img src="../../assets/members/lowStar.png" />-->
              <!--</span>-->
          <!--</div>-->
          <!--<div class="startGroundTips">-->
            <!--<span>升级条件</span>-->
            <!--<span style="float: right">好友交易1000-1999手</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="PomotionRuleGroundItem">-->
          <!--<div class="startGround">-->
            <!--<span class="startGroundTips">三星推广员</span>-->
            <!--<span class="start">-->
               <!--<img src="../../assets/members/star.png"/>-->
               <!--<img src="../../assets/members/star.png"/>-->
               <!--<img src="../../assets/members/star.png"/>-->
              <!--</span>-->
          <!--</div>-->
          <!--<div class="startGroundTips">-->
            <!--<span>升级条件</span>-->
            <!--<span style="float: right">好友交易2000-2999手</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <div class="RuleWrapper">
        <p class="RuleTitle"> {{language.Rules}}：</p>
        <p class="RuleCon">
          {{language.rule[0]}}<br>
          {{language.rule[1]}}<br>
          {{language.rule[2]}}<br>
          {{language.rule[3]}}<br>
          {{language.rule[4]}}<br>
        </p>
      </div>
      <div class="QtCodeBlock">
        <div class="QtCodeBlockArrow QtCodeBlockArrow_top"></div>
        <div class="QtCodeBlockArrow QtCodeBlockArrow_bottom"></div>
        <canvas id="QTCODE"></canvas>
      </div>
      <div class="MyPomotionCode">我的推广码：&nbsp {{getPromote.code}}</div>
    </div>
</template>

<script>
  import comTop from '../../common/commentTop'
  import QRCode from 'qrcode'
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  export default {
    components:{
      comTop
    },
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
  .RuleWrapper{
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }
.RuleTitle{
  text-align: left;
  color: #fff;
  font-size: 1rem;
  line-height: 3.428rem;
}
.RuleCon{
  background:rgba(8,8,8,1);
  box-shadow:0px 0px 20px 0px rgba(41,46,50,1);
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #fff;
  text-align: left;
  font-size:0.926rem;
  line-height: 1.5rem;
}
.PomotionRule{
  width:26.7857rem;
  margin: 0 auto;
}
.PomotionRuleGroundItem{
  padding-top: 1.5rem;
  height: 5.0714rem;
  padding-left:1.42rem;
  padding-right: 0.85714rem;
  box-sizing: border-box;
}
.startGround{
  height: 1.5rem;
  margin-bottom: 0.928571rem;
}
.PomotionRuleGroundItem  span{
  display: inline-block;
  float: left;
  font-size:0.928571rem;
  font-family:PingFang-SC-Regular;
  color:#fff;
}
.PomotionRuleGroundItem .start{
  float: right;
}
.start img{
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.71428rem;
}
.startGroundTips span{
  display: inline-block;
  float: left;
  font-size: 0.857142rem;
  font-family:PingFang-SC-Regular;
  color:#fff;
}
  .QtCodeBlock{
    margin: 0 auto;
    width:16.5rem;
    height: 16.5rem;
    margin-top:2.571rem;
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
