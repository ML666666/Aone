
<template>
   <div>
     <comTop>
       {{language.forgetPassWord.title}}
     </comTop>
     <div class="ForgetPassWordBlock">
       <input type="text" v-model="Phone"  :placeholder="language.forgetPassWord.phoneTips"/>
     </div>
     <div class="ForgetPassWordBlock">
       <input type="text"  v-model="VCode" :placeholder="language.forgetPassWord.verificationCode"/>
       <div @click="getVCode" class="getVCode">
         <template v-if="isDisable">{{language.forgetPassWord.vCode}}</template>
         <template v-if="!isDisable">{{timeTips}}</template>
       </div>
       <div v-model="isErrorShow" class="ForgetPassWordErrorTips">{{ErrorTis}}</div>
     </div>
     <div @click="neexStep" class="ForgetPassWordBtn">{{language.forgetPassWord.nextStep}}</div>
   </div>
</template>

<script>

  import comTop from '../common/commentTop'
  import axios from "axios";
  import qs from "qs";
  import { Indicator } from 'mint-ui';
  import gob from "../../store/config.js";
  import { MessageBox } from 'mint-ui';
  import error from '../../store/ErrorTips'
  export default {
    components:{
      comTop
    },
    data:function () {
      return{
        Phone:"",
        VCode:"",
        isErrorShow:false,
        ErrorTis:"",
        timer:null,
        time:121,
        timeTips:"",
        isDisable:true,
        TVCode:""
      }
    },
    methods:{
      neexStep:function () {
        var res = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/;
        if(this.Phone){
          if(res.test(this.Phone)){
            if(this.VCode){
              this.ErrorTis = ""
              if(this.VCode == this.TVCode){
                  var obj = {
                    Phone:this.Phone,
                    VCode:this.VCode
                  }
                  this.$store.commit('saveVcCode',obj);
                  this.$router.replace('reSetPassWord');
              }else{
                MessageBox.alert(error.errorTipObj.Verification_code_error+"!").then(action => {
                });
              }
            }else{
              this.ErrorTis = this.language.forgetPassWord.errorTips[2]
            }
          }else{
            this.ErrorTis = this.language.forgetPassWord.errorTips[1]
          }
        }else{
          this.ErrorTis = this.language.forgetPassWord.errorTips[0]
        }
      },
      getVCode:function () {
        var res = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/;
        if(this.time == 121) {
          if (this.Phone) {
            if (res.test(this.Phone)) {
              this.isDisable = false;
              this.ErrorTis = "";
              var obj = {
                phone: this.Phone
              }
              clearInterval(this.timer);
              var _this = this;
              var newObj = gob.getSign(obj);
              axios.post(gob.apiUrl+'/Api/Member/sms',qs.stringify(newObj)).then(function (res) {
                if(!res.data.errorCode){
                  _this.TVCode = res.data.re.code;
                  MessageBox.alert("error.errorTipObj.verification_ok").then(action => {
                  });
                  _this.timer = setInterval(function () {
                    _this.time--;
                    _this.timeTips = _this.time +'s';
                    if(_this.time == 0){
                      _this.time == 121;
                      _this.isDisable = true;
                      clearInterval(_this.timer);
                    }
                  },1000);
                }else{
                  MessageBox.alert(res.data.errorMsg).then(action => {
                  });
                  _this.isDisable = true;
                }
              })
            } else {
              this.ErrorTis = this.language.forgetPassWord.errorTips[1]
            }
          } else {
            this.ErrorTis = this.language.forgetPassWord.errorTips[0]
          }
        }
      }
    },
    mounted:function () {
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage;
      },
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
  font-size: 0.928rem;
  position: absolute;
  right: 0px;
  top: 0px;
  line-height: 2.5rem;
  width: 6.535rem;
  background:RGBA(26, 121, 255, 1);
  color: #fff;
}
.ForgetPassWordBlock:nth-child(2){
  margin-bottom: 1.75rem;
  margin-top: 7.642rem;
}
.ForgetPassWordBlock input[type="text"]{
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
  width:12.107rem;
  background:linear-gradient(360deg,rgba(26,121,255,1),rgba(156,196,251,1));
  border-radius:36px;
  margin: 0 auto;
  margin-top: 16.185rem;
  text-align: center;
  line-height: 2.857rem;
  color: #fff;
  font-size: 1rem;
}
</style>
