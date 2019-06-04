<template>
  <div class="LoginBlock">
    <div class="ToLoginUp">
      <router-link to="Login">
        <span>{{language.registered.loginBtn}}</span>
      </router-link>
    </div>
    <p class="toforgetPassWord">
      <span v-show="errorTipsShow" class="ErrorTips">{{errorTips}}</span>
    </p>
    <div class="FontBlock">
      <img src="../../assets/commentImg/PhoneIcon.png" />
      <input type="text"  v-model="phone" :placeholder="language.registered.phoneTips"/>
    </div>
    <div class="FontBlock">
      <img src="../../assets/commentImg/PassWordIcon.png"/>
      <input type="password" v-model="password"  :placeholder="language.registered.passWordTips"/>
    </div>
    <div class="FontBlock">
      <img src="../../assets/Login/makeSure.png" height="66" width="48"/>
      <input type="password" v-model="makeSurePassword" :placeholder="language.registered.MakeSurePassWord"/>
    </div>
    <div @click="register" class="LoginButton">
      <template>{{language.registered.registered}}</template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    mounted:function () {
      if(this.$route.query.code){
        this.code= this.$route.query.code;
      }else{
        this.code= "";
      }
      $('.LoginBlock').height($(window).height());
    },
    data:function () {
      return{
        errorTipsShow:false,
        phone:"",
        password:"",
        makeSurePassword:"",
        errorTips:"",
        YZM:"",
        code:""
      }
    },
    computed:{
      isChinese:function () {
        return this.$store.getters.getLanguageType
      },
      language:function () {
        return this.$store.getters.getLanguage;
      },
    },
    methods:{
      register:function () {
        var res = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/;
        if(this.phone){
          if(res.test(this.phone)){
            this.errorTipsShow = false;
            if(this.password){
              this.errorTipsShow = false;
              if(this.makeSurePassword){
                this.errorTipsShow = false;
                if(this.makeSurePassword == this.password){
                  this.errorTipsShow = false;
                      var obj = {
                        username:this.phone,
                        password:this.password,
                        code:this.code
                      }
                      this.$store.dispatch('actionRegistered',obj);
                }else{
                  this.errorTipsShow = true;
                  this.errorTips = this.language.registered.errorTips[0]
                }
              }else{
                this.errorTipsShow = true;
                this.errorTips = this.language.registered.errorTips[1]
              }
            }else{
              this.errorTipsShow = true;
              this.errorTips = this.language.registered.errorTips[2]
            }
          }else{
            this.errorTipsShow = true;
            this.errorTips = this.language.registered.errorTips[3]
          }
        }else{
          this.errorTipsShow = true;
          this.errorTips = this.language.registered.errorTips[4]
        }
      }
    }
  }
</script>

<style scoped>
  .LoginBlock{
    width:26.7857rem;
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
  .FontBlock input{
    width: 19rem;
    height:2.5rem;
    padding-left:0.714rem;
    text-align: left;
    background: transparent;
    color:rgba(255,255,255,0.6);
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
