<template>
<div  style="padding-top: 3.1428rem;">
  <comTop>
    {{language.title}}
  </comTop>
  <div class="dz">{{language.select}}:</div>
  <div class="link">{{url}}</div>
  <div class="copy"
       v-clipboard:copy="url"
       v-clipboard:success="copy"
  >{{language.Copy}}</div>
  <a class="ToPasteURLPage">{{language.to}}</a>
</div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import gob from "../../../store/config.js";
import comTop from '../../common/commentTop'
import { Toast } from 'mint-ui';
import errorObj from '../../../store/ErrorTips'
export default {
        name: "top-up",
        components:{
          comTop
        },
        data:function () {
          return{
            url:""
          }
        },
        methods:{
          copy:function () {
            Toast({
              message:errorObj.getErrorTipsObj().Copy_success,
              position: 'top',
              duration: 1000
            });
          }
        },
        computed:{
          language:function () {
              return this.$store.getters.getLanguage.Deposit_record
           },
        },
        mounted:function () {
          let _this = this;
          let obj = {
            userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
            token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
          }
          let newObj = gob.getSign(obj);
          axios.post(gob.apiUrl + '/Api/Member/address',qs.stringify(newObj)).then(function (res) {
            _this.url = res.data.re.address;
          });
        }
}
</script>

<style scoped>
.dz{
  font-size: 1rem;
  float: left;
  color: #ffffff;
  padding-left: 0.875rem;
  margin-top: 4.284rem;
  margin-bottom:0.875rem;
}
.link{
  font-size: 0.928rem;
  color: RGBA(26, 121, 255, 1);
  text-align: left;
  padding-left: 0.875rem;
  margin-bottom:0.875rem;
  text-decoration: underline;
}
.copy{
  font-size: 0.928rem;
  color: #FFF;
  text-align: right;
  padding-right: 0.875rem;
  text-decoration: underline;
}
  .ToPasteURLPage{
    width:11.4rem;
    background:linear-gradient(360deg,rgba(26,121,255,1),rgba(156,196,251,1));;
    border-radius:5px;
    line-height: 2.5714rem;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-top: 12.5rem;
    border-radius:36px;
    display: block;
  }
 .PasteUrlItem .UrlType{
   background-size: 1.321rem;
 }
 .PasteUrlItem:nth-child(1) .UrlType{
   background: url(../../../assets/members/BTC.png) no-repeat center center;
   background-size: 1.85rem;
 }
 .PasteUrlItem:nth-child(2) .UrlType{
   background: url(../../../assets/members/ETH.png) no-repeat center center;
   background-size: 1.85rem;
 }
 .PasteUrlItem:nth-child(3) .UrlType{
   background: url(../../../assets/members/LTC.png) no-repeat center center;
   background-size: 1.85rem;
 }
  .active .URLitem{
    color: RGBA(26, 121, 255, 1);
  }
</style>
