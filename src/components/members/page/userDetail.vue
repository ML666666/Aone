<template>
  <div  style="padding-top: 3.1428rem;">
    <comTop>
      {{language.title}}
    </comTop>
    <router-link to="reSetUserHeader">
    <div  class="UserDataItem">
        <div class="UserDataItemTitle">
          {{language.Head_portrait}}
        </div>
      <img src="../../../assets/Login/Arror.png"/>
      <img v-if="!haveHeader" class="UserDataItemHeader" :src="headerUrl"/>
      <img v-if="haveHeader" class="UserDataItemHeader" src="../../../assets/commentImg/header_3.png"/>
    </div>
    </router-link>
    <div class="UserDataItem">
      <div class="UserDataItemTitle">
        {{language.User_name}}
      </div>
      <span>
        <input  style="
              background: transparent;
              text-align: right;
              height: 100%;
              width: 19rem;
              color: #fff"
               type="text"
               v-model="changeName"
               @change="vChangeName"
               :placeholder="nickname">
      </span>
    </div>
    <div class="UserDataItem">
      <div class="UserDataItemTitle">
        {{language.Bound_phone}}
      </div>
      <span>{{username}}</span>
    </div>

    <router-link to="Real_name_authentication">
      <div class="UserDataItem">
        <div class="UserDataItemTitle">
          实名认证
        </div>
        <img src="../../../assets/Login/Arror.png"/>
      </div>
    </router-link>

    <router-link to="Advanced_real_name_authentication">
      <div class="UserDataItem">
        <div class="UserDataItemTitle">
          高级认证
        </div>
        <img src="../../../assets/Login/Arror.png"/>
      </div>
    </router-link>


    <router-link to="merReSetPassWord">
    <div class="UserDataItem">
      <div class="UserDataItemTitle">
        {{language.change_Password}}
      </div>
      <img src="../../../assets/Login/Arror.png"/>
    </div>
    </router-link>


    <div  @click="isShow = !isShow" class="memberResetPassWordButton">{{language.Log_out}}</div>


    <transition name="vux-pop-nor"  mode="out-in">
    <div v-show="isShow" class="reSetHeaderMask">
      <div class="reSetHeaderButtomGround">
        <div class="MakeSureOutTips">{{language.LogTips}}</div>
        <div @click="Login" class="reSetHeaderButtomGroundItem MakeSureOut">{{language.Confirm_the_exit}}</div>
        <div @click="isShow = !isShow" class="reSetHeaderButtomGroundItem">{{language.cancel}}</div>
      </div>
    </div>
    </transition>
  </div>

</template>

<script>
  import errorObj from '../../../store/ErrorTips'
  import comTop from '../../common/commentTop'
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import { Toast } from 'mint-ui';
    export default {
        name: "user-detail",
        components:{
         comTop
        },
      mounted:function () {
        if(JSON.parse(localStorage.getItem('game_2_UserData')).head_img){
          this.headerUrl = JSON.parse(localStorage.getItem('game_2_UserData')).head_img
          this.haveHeader = false;
        }else{
          this.haveHeader = true;
        }
      },
      computed:{
        language:function () {
          return this.$store.getters.getLanguage.personInfo
        },
      },
        data(){
          return{
            isShow:false,
            haveHeader:false,
            headerUrl:null,
            changeName:"",
            nickname:JSON.parse(localStorage.getItem('game_2_UserData')).nickname,
            username:JSON.parse(localStorage.getItem('game_2_UserData')).username
          }
        },
        methods:{
          Login:function () {
           localStorage.removeItem("game_2_UserData");
           this.$router.push({ name:'Login'});
          },
          vChangeName:function () {
            let _this = this;
            let obj = {
              code:"nickname",
              svalue:this.changeName,
              userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
              token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
            }
            let newObj = gob.getSign(obj);
            axios.post(gob.apiUrl + '/api/member/userInfoModify',qs.stringify(newObj)).then(function (res) {
                       console.log(res);
                       if(res.data.re){
                         var obj = JSON.parse(localStorage.getItem('game_2_UserData'));
                         obj.nickname = _this.changeName,
                         localStorage.setItem('game_2_UserData',JSON.stringify(obj));
                         Toast({
                           message:errorObj.getErrorTipsObj().modified_successfully,
                           position: 'top',
                           duration: 1000
                         });
                       }
            });
          }
        }
    }
</script>

<style scoped>
  .reSetHeaderMask{
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: rgba(0,0,0,0.6);
  }
  .reSetHeaderButtomGround{
    position: absolute;
    bottom: 0px;
  }
  .reSetHeaderButtomGroundItem{
    height: 3.642rem;
    background: rgba(41,46,50,0.6);
    text-align: center;
    line-height: 3.642rem;
    width:26.7857rem;
    color: #FFF;
  }
  .memberResetPassWordButton{
    width:11.4rem;
    background:linear-gradient(360deg,rgba(26,121,255,1),rgba(156,196,251,1));;
    border-radius:5px;
    line-height: 2.5714rem;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-top: 12.5rem;
    border-radius:36px;
  }
  .UserDataItem{
  margin: 0 auto;
  margin-top: 1.214rem;
  height:2.85714rem;
  background:RGBA(8, 8, 8, 1);
  box-shadow: 0px 0px 20px 0px rgba(41,46,50,1);
  padding-right: 0.85714rem;
}
.UserDataItem img{
  float: right;
  margin-top: 1.425rem;
  transform: translateY(-50%);
  width: 0.642857rem;
  height: 0.642857rem;
  height: auto;
}
.UserDataItemHeader{
  width: 2.14rem !important;
  height: 2.14rem !important;;
  height: auto;
  margin-right: 0.5rem;
}
.UserDataItem span{
  line-height: 2.85714rem;
  text-align: right;
  float: right;
  color: #fff;
}
.UserDataItemTitle{
  height: 2.85714rem;
  line-height: 2.85714rem;
  text-align: left;
  display: inline-block;
  float: left;
  padding-left: 0.85714rem;
  font-size: 0.928571rem;
  font-family: PingFang-SC-Regular;
  color: #fff;
}
  .reSetHeaderButtomGround .MakeSureOut{
    color: RGBA(254, 123, 131, 1);
    box-sizing: content-box;
    border-bottom:0.428rem solid rgba(255,255,255,0.3);
  }
  .reSetHeaderButtomGround .MakeSureOutTips{
    width: 100%;
    padding: 1.3rem;
    text-align: center;
    font-size:0.908rem;
    font-family:PingFang-SC-Regular;
    color:#FFF;
    background:rgba(41,46,50,0.6);
    border-bottom: 1px solid rgba(255,255,255,0.3);
  }
</style>
