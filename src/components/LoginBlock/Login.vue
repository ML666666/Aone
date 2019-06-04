<template>
  <div class="LoginBlock">
    <div class="ToLoginUp">
      <router-link to="register">
        <template>{{language.Login.registered}}</template>
      </router-link>
    </div>
    <p class="toforgetPassWord">
      <span class="ErrorTips"  v-show="errorTipsShow">{{errorTips}}</span>
    </p>
    <div class="FontBlock">
     <img src="../../assets/Login/PhoneIcon.png" />
      <template>
        <input type="text" v-model="userName" :placeholder="language.Login.phoneTips"/>
      </template>
    </div>
    <div class="FontBlock">
      <img src="../../assets/Login/PassWordIcon.png" />
      <template>
        <input type="password" v-model="passWord" :placeholder="language.Login.passWordTips"/>
      </template>
    </div>
    <div @click="show" class="FontBlock">
      <img src="../../assets/Login/languageIcon.png"/>
      <template>
        <div class="inputText">
          <template v-if="getLanguageType == 'chinese'">简体中文</template>
          <template v-if="getLanguageType == 'English'">EN</template>
          <template v-if="getLanguageType == 'upChinese'">繁體中文</template>
          <template v-if="getLanguageType == 'Japanese'">日本语</template>
        </div>
      </template>
      <img style="position: absolute;right: 0.4rem;width: 0.8rem; height: 1.21421rem;" src="../../assets/Login/Arror.png" height="54" width="27"/>
  </div>

    <p class="toforgetPassWord">
      <router-link to="forgetPassWord">
        <template>
          {{language.Login.Forgot}}
        </template>
      </router-link>
    </p>
    <div @click="Login" class="LoginButton" >{{language.Login.loginBtn}}</div>

    <changeLanguageBlock v-show="isShow" v-on:ChangeLanguageBlockHide="hideChangeLanguageBlock"></changeLanguageBlock>
  </div>
</template>

<script>
    import error from '../../store/ErrorTips'
    import { MessageBox } from 'mint-ui';
    import changeLanguageBlock from '../common/changeLanguageBlock'
    export default {
        name: "login",
        components:{
          changeLanguageBlock
        },
        mounted:function () {
          $('.LoginBlock').height($(window).height());
          // $(window).resize(function () {
          //   $('.LoginBlock').height($(window).height());
          // })
        },
        data:function () {
           return{
             isShow:false,
             LanguageType:0,
             userName:"",
             passWord:"",
             errorTips:"",
             errorTipsShow:false,
           }
        },
        computed:{
          language:function () {
            return this.$store.getters.getLanguage;
          },
          isChinese:function () {
            return this.$store.getters.getLanguageType
          },
          getLanguageType:function () {
            return this.$store.getters.getLanguageType;
          }
        },
        methods:{
          Login:function () {
            var res = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/;
            if(this.userName){
              this.errorTipsShow = false;
              if(res.test(this.userName)) {
                this.errorTipsShow = false;
                if (this.passWord) {
                  this.errorTipsShow = false;
                  var obj = {
                    username: this.userName,
                    password: this.passWord
                  }
                  this.$store.dispatch('actionLogin', obj);
                } else {
                  this.errorTipsShow = true;
                  this.errorTips = this.language.Login.errorTips[1];
                }
              }else{
                this.errorTipsShow = true;
                this.errorTips = this.language.Login.errorTips[2];
              }
            }else{
               this.errorTipsShow = true;
               this.errorTips = this.language.Login.errorTips[0];
            }
          },
          hideChangeLanguageBlock:function (data) {
            this.isShow = data;
          },
          show:function () {
            $('.tradingMask').show()
          }
        }
    }
</script>

<style scoped>
  .LoginBlock{
     /*width:26.7857rem;*/
     background:RGBA(0, 0, 0, 1)  url("../../assets/Login/loginBg.png") no-repeat bottom center;
     background-size: 26.7857rem;
     margin: 0 auto;
     padding-top: 1.428rem;
  }
  .ToLoginUp{
    height:3.259rem;
    line-height:3.259rem;
    padding-right: 2.66666rem;
    text-align: right;
    margin-bottom: 3.214rem;
  }
  .ToLoginUp a{
    text-decoration: underline;
    color: #fff;
  }
  .FontBlock{
    width: 21.428rem;
    height: 3.42rem;
    border-radius: 3px;
    margin: 0 auto;
    padding-top: 1.71rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    position: relative;
  }
  .FontBlock *{
    transform: translateY(-50%);
    display: inline-block;
    float: left;
  }
  .FontBlock input,.FontBlock .inputText{
    width: 19rem;
    height:2.5rem;
    padding-left:0.714rem;
    text-align: left;
    background: transparent;
    color:rgba(255,255,255,0.6);
    line-height: 2.5rem;
  }
  .FontBlock input::-webkit-input-placeholder{
    color:rgba(255,255,255,0.6);
  }
  .FontBlock input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:rgba(255,255,255,0.6);
  }
  .FontBlock input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:rgba(255,255,255,0.6);
  }
  .FontBlock input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:rgba(255,255,255,0.6);
  }
  .FontBlock img{
    width: 1.142rem;
    margin-left:0.2rem;
    height: auto;
  }
  .toforgetPassWord{
    margin: 0 auto;
    margin-top: 0.714rem;
    text-align: right;
    width:21.428rem;
    text-decoration: underline;
    color: #fff;
    position: relative;
    font-size: 0.928rem;
  }
  .toforgetPassWord a{
    color:#fff;
    white-space: nowrap;
  }
  .toforgetPassWord .ErrorTips{
    color:RGBA(26, 121, 255, 1);
    left: 0px;
    top: -1.5rem;
    position: absolute;
    font-size: 0.928rem;
  }
  .LoginButton{
    width:10rem;
    height:2.214rem;
    border-radius:3px;
    margin: 0 auto;
    margin-top: 3.714rem;
    color:#fff;
    line-height:2.214rem;
    border-radius:36px;
    border:1px solid rgba(255,255,255,1);
  }

</style>
