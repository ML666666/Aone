<template>
  <div style="padding-top: 3.417rem" class="Ad_name_a">
    <top>高级认证</top>
    <div class="inputItem">
      <label>您的真实姓名</label>
      <input type="text"/>
    </div>
    <div class="inputItem">
      <label>身份证号码</label>
      <input type="text"/>
    </div>
    <div class="title">
      上传身份证照片
    </div>
    <div class="transformIdCardWrapper">
      <label class="transformIdCardItem">
        <p>上传身份证人像面</p>
      </label>
      <label class="transformIdCardItem">
        <p>
          上传身份证国徽面
        </p>
      </label>
      <label class="transformIdCardItem">
        <p>
          上传手持身份证人像面
        </p>
      </label>
      <label class="transformIdCardItem">
        <p>
          上传手持身份证国徽面
        </p>
      </label>
    </div>
    <div class="MakeSureAgreement"> <img src="../../../assets/exchange/radius.png" height="24" width="24"/> <span> 我已阅读并同意 <a>用户协议</a></span></div>
    <div class="btn">完成认证</div>
  </div>
</template>
<script>
  import top from '../../common/commentTop'
    export default {
        name: "advanced_real_name_authentication",
        components:{
          top
        }
    }
</script>

<style scoped>
  .Ad_name_a .inputItem{
    height:2.5rem;
    margin-top: 1.428rem;
  }
  .Ad_name_a .inputItem label{
    height:2.5rem ;
    width: 7.5rem;
    line-height:2.5rem ;
    display: inline-block;
    float: left;
    font-size: 0.928rem ;
    color: #FFF;
    text-align: left;
    padding-left:0.857rem;
    box-sizing: border-box;
  }
  .Ad_name_a .inputItem input{
    width:18.428rem;
    height:2.5rem ;
    background:rgba(0,0,0,1);
    box-shadow: 0px 0px 20px 0px rgba(41,46,50,1);
    display: inline-block;
    float: left;
    font-size:0.928rem ;
    padding-left: 1rem;
    color: #fff;
  }
  .Ad_name_a .title{
    margin-top:1.428rem ;
    padding-left:0.857rem ;
    font-size: 0.928rem ;
    color: #fff;
    text-align: left;
    margin-bottom: 1.428rem ;
  }
  .Ad_name_a .transformIdCardWrapper {
    padding: 0 2.14rem;
  }
  .Ad_name_a .transformIdCardWrapper:after{
    display: block;
    clear: both;
    content: " ";
    height: 0px;
  }
  .Ad_name_a .transformIdCardWrapper  .transformIdCardItem{
    display: inline-block;
    float: left;
    width:9.5rem;
    height:7.14rem;
    border: 1px dotted rgba(255,255,255,0.4);
    margin-bottom: 1.428rem;
    padding-top: 3.57rem;
    box-sizing: border-box;
  }
  .Ad_name_a .transformIdCardWrapper  .transformIdCardItem p{
    transform: translateY(-50%);
    color: #fff;
    font-size:0.78571rem ;
  }
  .Ad_name_a .transformIdCardWrapper  .transformIdCardItem:nth-child(2n){
    float: right;
  }
  .Ad_name_a .MakeSureAgreement{
    height: 1.285rem;
    padding-top: 0.64rem;
  }
  .Ad_name_a .MakeSureAgreement img{
    width: 1rem;
    display: inline-block;
    float: left;
    height: auto;
    margin:0px 0.857rem ;
    transform: translateY(-50%);
  }
  .Ad_name_a .MakeSureAgreement span{
    line-height: 1.285rem;
    font-size: 0.571rem;
    display: inline-block;
    float: left;
    color: #fff;
    transform: translateY(-50%);
  }
  .Ad_name_a .MakeSureAgreement span a{
    text-decoration: underline;
    color: #fff;
  }
  .Ad_name_a .btn{
    width:11.428rem;
    height:2.571rem;
    background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
    border-radius:1.28rem;
    margin: 0 auto;
    text-align: center;
    line-height:2.571rem;
    font-size: 1rem;
    margin-top: 108px;
    color: #fff;
  }
</style>
