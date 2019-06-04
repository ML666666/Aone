<template>
  <div  style="padding-top: 3.1428rem;" class="MakeSureTopUp">
    <comTop>
      可提现{{userDetial}}
    </comTop>
    <div class="MakeSureTopUpContainer">
      <p class="MakeSureTopUpType">
        提取类型：USDT
      </p>
      <p  class="MakeSureTopUpType">钱包地址：<a>0x80ec815158d93fc46aa11526a102206a4a a7e87</a></p>
      <p style="margin-top: 2rem;" class="MakeSureTopUpType">
        请输入提取币额：<input type="text" placeholder="最低提取币额为0.0001B"/>
      </p>
    </div>
    <a class="MakeSureTopUpButtom">确认提取</a>
  </div>
</template>

<script>
  import comTop from '../../common/commentTop'
  export default {
    components:{
      comTop
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage
      },
      userDetial:function () {
        return JSON.parse(localStorage.getItem('game_2_UserData'))
      },
    },
  }
</script>

<style scoped>
.MakeSureTopUp{
  width:26.7857rem;
}
.MakeSureTopUpContainer{
 padding-top: 1.214rem;
  box-sizing: border-box;
  padding-left: 0.851rem;
  padding-right:1.0714rem;
}
  .MakeSureTopUpType{
    text-align: left;
    margin-bottom: 0.928571rem;
  }
  .MakeSureTopUpType a{
    width: 19rem;
    display: inline-block;
    transform: translateY(.428rem);
    color: RGBA(70, 212, 233, 1);
    text-decoration: underline;
  }
  .MakeSureTopUpType input{
    width:16.14285rem;
    height:1.78571429rem;
    background:rgba(243,241,241,1);
    border-radius:4px;
    text-align: left;
    font-size: 0.785714rem;
    padding-left: 1rem;
  }
  .MakeSureTopUpButtom{
    display: block;
    width:12.107rem;
    height:2.857142rem;
    background:linear-gradient(180deg,rgba(232,237,238,1),rgba(91,91,91,1));
    border-radius:3px;
    margin: 0 auto;
    margin-top: 17.142rem;
    line-height:2.857142rem;
    color: #fff;
  }
</style>
