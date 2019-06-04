<template>
  <div  style="padding-top: 3.1428rem;">
    <comTop>
      {{language.title}}
    </comTop>
    <p class="havaMoney">{{language.canGet}}：{{balance}}USDT</p>
    <div class="getMoneyWrapper">
      <label>{{language.getTo}}：</label>
      <input v-model="getTo" style="margin-bottom: 0.875rem;" type="text" :placeholder="language.wallet_address"/>
    </div>
    <div class="getMoneyWrapper">
      <label>{{language.getAcount}}：</label>
      <input v-model="getAcount"   type="text" :placeholder="language.minimum"/>
    </div>
    <div @click="getAll" class="copy"
    >{{language.getAll}}</div>
    <a class="ToPasteURLPage" @click="getMoney">{{language.title}}</a>
  </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import {MessageBox, Toast} from "mint-ui";
  import comTop from '../../common/commentTop'
  export default {
    name: "top-up",
    components:{
      comTop
    },
    data:function () {
      return{
        getTo:null,
        getAcount:null,
        balance:JSON.parse(localStorage.getItem('game_2_UserData')).balance
      }
    },
    methods:{
      getAll:function () {
         this.getAcount = this.getBalance;
      },
      getMoney:function () {
        let _this = this;
          if(this.getTo){
            if(this.getAcount){
               if(this.getAcount>=10){
                 MessageBox.prompt(this.language.MakeSure ,{inputType:"password"}).then(({ value, action }) => {
                   if(action){
                     let obj = {
                       userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                       token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
                       address:_this.getTo,
                       deposit:_this.getAcount,
                       password:value
                     }
                     let newObj = gob.getSign(obj);
                     axios.post(gob.apiUrl + '/Api/Member/deposit',qs.stringify(newObj)).then(function (res) {
                            _this.balance = res.data.re.balance;
                            var obj = JSON.parse(localStorage.getItem('game_2_UserData'));
                            obj.balance = res.data.re.balance;
                            localStorage.setItem('game_2_UserData',JSON.stringify(obj));
                           Toast({
                             message:_this.language.Mention_money,
                             position: 'top',
                             duration: 1000
                           });
                     });
                   }else {

                   }
                 });
               }else{
                 Toast({
                   message: _this.language.errorTips[1],
                   position: 'top',
                   duration: 1000
                 });
               }
            }else {
              Toast({
                message: _this.language.errorTips[2],
                position: 'top',
                duration: 1000
              });
            }
          }else{
            Toast({
              message: _this.language.errorTips[3],
              position: 'top',
              duration: 1000
            });
          }
      }
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage.Withdraw_record
      },
      getBalance:function () {
        if(this.$store.getters.getBalance){
          return this.$store.getters.getBalance
        }else{
          if(localStorage.getItem('game_2_UserData')){
            return JSON.parse(localStorage.getItem('game_2_UserData')).balance;
          }else{
            return "0.0000"
          }
        }
      },
    },
  }
</script>

<style scoped>
  .getMoneyWrapper{
    width: 100%;
    padding-left:0.875rem;
    padding-right:0.875rem;
    line-height: 1.785rem;
    color: #fff;
    font-size: 1rem;
 }
  .getMoneyWrapper:after{
    clear:both;
    content:'';
    display:block;
    height:0;
  }
  .getMoneyWrapper *{
    display: inline-block;
    float: left;
  }
  .getMoneyWrapper input{
    height: 1.785rem;
    background: transparent;
    text-align: left;
    font-size: 0.785rem;
    width: 100%;
    box-shadow: 0px 0px 20px 0px rgba(41,46,50,1);
    margin-top: 0.5rem;
    padding-left: 0.40571rem;
    color: #fff;
  }
  .copy{
    font-size: 0.928rem;
    color: #FFF;
    text-align: right;
    padding-right: 0.875rem;
    text-decoration: underline;
    margin-top: 1rem;
  }
  .havaMoney{
    font-size: 1rem;
    color: #ffffff;
    padding-left: 0.875rem;
    margin-top: 1.142rem;
    margin-bottom:0.875rem;
    text-align: left;
  }
  .TopUpTips{
    width:26.7857rem;
    font-size:1ren;
    font-family:PingFang-SC-Regular;
    color:#fff;
    margin-top: 1.214rem;
    box-sizing: border-box;
    padding-left: 0.857rem;
    text-align: left;
    margin-bottom: 1rem;
  }
  .PasteUrlItem{
    height: 5.428rem;
    width:26.7857rem;
    box-sizing: border-box;
    position: relative;
    padding-left: 3.71428rem;
    padding-right: 1.2rem;
    padding-top:0.928rem;;
  }
  .UrlType{
    position: absolute;
    width: 2.1428rem;
    height: 2.1428rem;
    left: 0.714rem;
    top: 1.3rem;
  }
  .PasteUrlItemBlock{
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgba(255,255,255,03);
  }
  .PasteUrlItem:last-child .PasteUrlItemBlock{
    border:none;
  }
  .URLitem{
    width: 22.107rem;
    font-size: 0.928571rem;
    text-align: left;
    margin-top: 0.928rem;
    color: RGBA(255, 255, 255, 1);
    text-decoration: underline;
  }
  .PasteURL{
    text-align: right;
    font-family:PingFang-SC-Regular;
    color:RGBA(255, 255, 255, 1);
    font-size: 0.8571rem;
    margin-top: 0.71428rem;
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
