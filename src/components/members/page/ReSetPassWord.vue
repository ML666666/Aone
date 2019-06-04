<template>
    <div  style="padding-top: 3.1428rem;" class="memberReSetPassWord">
      <comTop>
        {{language.title}}
      </comTop>
      <input type="password" v-model="oldVal" :placeholder="language.Old_code"/>
      <input type="password" v-model="newVal" :placeholder="language.New_code"/>
      <input type="password" v-model="makeSureVal" :placeholder="language.Confirm_password"/>
      <p class="memberReSetPassWordTips">
        {{ErrorTips}}
      </p>
      <div class="memberResetPassWordButton" @click="reSetPsw">{{language.Confirm_change}}</div>
    </div>
</template>

<script>
  import comTop from '../../common/commentTop'
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import { Toast } from 'mint-ui';
  import  error from '../../../store/ErrorTips'
  export default {
    components:{
      comTop
    },
    methods:{
      reSetPsw:function () {
        var _this = this;
          if(this.oldVal){
            if(this.newVal){
               if(this.makeSureVal){
                  if(this.newVal == this.makeSureVal){
                    this.ErrorTips = ""
                    let obj = {
                      userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                      token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
                      password:_this.oldVal,
                      newpassword:_this.newVal,
                      confpassword:_this.makeSureVal
                    }
                    let newObj = gob.getSign(obj);
                    axios.post(gob.apiUrl + '/Api/Member/modifyPwd',qs.stringify(newObj)).then(function (res) {
                      console.log(res);
                      if(res.data.re){
                        Toast({
                          message: error.getErrorTipsObj().Password_changed_successfully,
                          position: 'middle',
                          duration: 1000
                        });
                        setTimeout(function () {
                          _this.$router.push({ name:'userDetail'});
                        },1000)
                      }else{
                        Toast({
                          message: error.getErrorTipsObj().Password_changed_failed,
                          position: 'middle',
                          duration: 1000
                        });
                      }
                    });
                  }else{
                    this.ErrorTips = this.language.errorTips[3];
                  }
               }else {
                 this.ErrorTips = this.language.errorTips[2];
               }
            }else{
              this.ErrorTips = this.language.errorTips[1];
            }
          }else{
            this.ErrorTips = this.language.errorTips[0];
          }
      }
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage.Change_password
      },
    },
    data:function () {
      return{
        oldVal:"",
        newVal:"",
        makeSureVal:"",
        isError:true ,
        ErrorTips:""
      }
    }
  }
</script>

<style scoped>
  .memberReSetPassWord{
    width:26.7857rem;
    margin: 0 auto;
  }
  .memberReSetPassWord input::-webkit-input-placeholder{
    color:#FFF;
  }
  .memberReSetPassWord input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#fff;
  }
  .memberReSetPassWord input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#fff;
  }
  .memberReSetPassWord input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#fff;
  }
  .memberReSetPassWord input{
    background:RGBA(41, 46, 50, 1);
  }
  .memberReSetPassWord input[type="password"]{
    width: 25.0714rem;
    height: 2.857142rem;
    display: block;
    margin: 0 auto;
    margin-top: 1.21428rem;
    text-align: left;
    border-radius:6px;
    padding-left: 0.85714rem;
    background:RGBA(41, 46, 50, 1);
    color: #fff;
  }
  .memberReSetPassWordTips{
    width: 25.0714rem;
    margin: 0 auto;
    text-align: left;
    font-size:0.928571rem;
    font-family:PingFang-SC-Regular;
    color:#fff;
    height: 1rem;
    margin-top: 0.785rem;
  }
  .memberResetPassWordButton{
    width:12.10714rem;
    height:2.85714rem;
    background:linear-gradient(360deg,rgba(26,121,255,1),rgba(156,196,251,1));
    border-radius:36px;
    line-height: 2.85714rem;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-top: 12.5rem;
  }
</style>
