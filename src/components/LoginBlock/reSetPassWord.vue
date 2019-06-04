
<template>
  <div>
    <comTop>
      {{language.reSetPassWord.title}}
    </comTop>
    <div class="ForgetPassWordBlock">
      <input type="password" v-model="passWord"  :placeholder="language.reSetPassWord.newPassWord"/>
    </div>
    <div class="ForgetPassWordBlock">
      <input type="password" v-model="makeSurePassWord"  :placeholder="language.reSetPassWord.makeSurePassWord"/>
      <div v-show="isShowErrorTips" class="ForgetPassWordErrorTips">{{ErrorTips}}</div>
    </div>
    <div @click="ForgetPassWord" class="ForgetPassWordBtn">{{language.reSetPassWord.makeSurePassWordBtn}}</div>
  </div>
</template>

<script>
  import error from '../../store/ErrorTips'
  import comTop from '../common/commentTop';
  import axios from "axios";
  import qs from "qs";
  import { Indicator } from 'mint-ui';
  import gob from "../../store/config.js";
  import { MessageBox } from 'mint-ui';
  export default {
    components:{
      comTop
    },
    data:function () {
      return{
        passWord:"",
        makeSurePassWord:"",
        isShowErrorTips:false,
        ErrorTips:""
      }
    },
    mounted:function () {
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage;
      },
    },
    methods:{
      ForgetPassWord:function () {
         if(this.passWord){
             if(this.makeSurePassWord){
               if(this.makeSurePassWord == this.passWord){
                 this.isShowErrorTips = false;
                 var obj = {
                   phone:this.$store.getters.getVCodeObj.Phone,
                   validate:this.$store.getters.getVCodeObj.VCode,
                   newpassword:this.passWord
                 }
                 var newObj = gob.getSign(obj);
                 axios.post(gob.apiUrl+'/Api/Member/forgetPwd',qs.stringify(newObj)).then(function (res) {
                   if(!res.data.errorCode){
                     var _this = this;
                     MessageBox.alert(error.getErrorTipsObj().Password_changed_successfully).then(action => {
                       _this.$router.push("Login");
                     })
                   }else{
                     MessageBox.alert(res.data.errorMsg);
                   }
                 });
               }else{
                 this.isShowErrorTips = true;
                 this.ErrorTips = this.language.reSetPassWord.errorTips[2];
               }
             }else{
               this.isShowErrorTips = true;
               this.ErrorTips = this.language.reSetPassWord.errorTips[1];
             }
         }else{
            this.isShowErrorTips = true;
            this.ErrorTips = this.language.reSetPassWord.errorTips[0]
         }
      }
    }
  }
</script>

<style scoped>
  .ForgetPassWordBlock{
    position: relative;
    width:25.071rem;
    height:2.5rem;
    border-radius:3px;
    margin: 0 auto;
  }
  .ForgetPassWordBlock .ForgetPassWordErrorTips{
    position: absolute;
    color: red;
    margin-top: 0.3rem;
    font-size: 0.928rem;
  }
  .ForgetPassWordBlock .getVCode{
    height:2.5rem;
    font-size: 0.928rem;
    position: absolute;
    right: 0px;
    top: 0px;
    line-height: 2.5rem;
    width: 6.535rem;
    background: RGBA(147, 146, 146, 1);
    color: #fff;
  }
  .ForgetPassWordBlock:nth-child(2){
    margin-bottom: 1.75rem;
    margin-top: 7.642rem;
  }
  .ForgetPassWordBlock input[type="password"]{
    background: transparent;
    width: 100%;
    line-height: 2.5rem;
    text-align: left;
    font-size: 0.928rem;
    padding-left: 0.857rem;
    background: RGBA(41, 46, 50, 1);
    color: #fff;
  }
  .ForgetPassWordBlock input::-webkit-input-placeholder{
    color:RGBA(102, 102, 102, 1);
  }
  .ForgetPassWordBlock input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:RGBA(102, 102, 102, 1);
  }
  .ForgetPassWordBlock input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:RGBA(102, 102, 102, 1);
  }
  .ForgetPassWordBlock input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:RGBA(102, 102, 102, 1);
  }
  .ForgetPassWordBtn{
    width: 12.107rem;
    background: -webkit-gradient(linear,left bottom, left top,from(rgba(26,121,255,1)),to(rgba(156,196,251,1)));
    background: linear-gradient(360deg,rgba(26,121,255,1),rgba(156,196,251,1));
    border-radius: 36px;
    margin: 0 auto;
    margin-top: 16.185rem;
    text-align: center;
    line-height: 2.857rem;
    color: #fff;
    font-size: 1rem;
  }
</style>
