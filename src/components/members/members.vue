<template>
	<div id="members">
    <router-link to="/members/userDetail">
    <img v-if="!userUrl" class="PersonImg" src="../../assets/commentImg/header_3.png" />
      <img v-if="userUrl" :src="userUrl" class="PersonImg">
    <h2 v-if="nickname" class="PersonName">{{nickname}}</h2>
      <h2 v-if="!nickname" class="PersonName">{{username}}</h2>
      <h2 class="PersonName">{{language.MemberCenter.assets}}：{{userDetial.balance}}USDT</h2>
    </router-link>
    <div class="PersonSet_Out_Money_Link_Block">
      <router-link to="/members/TopUp">
        <img src="../../assets/members/topUP.png"/>
        <template>{{language.MemberCenter.ChargeMoney}}</template>
      </router-link>
      <router-link to="/members/withDraWal">
        <template>{{language.MemberCenter.TakeOutTheMoney}}</template>
        <img style="width: 1.3rem" src="../../assets/members/topDown.png"/>
      </router-link>
    </div>


    <div class="PersonDataDetailItemWrapper">
      <router-link to="/members/userDetail">
        <div class="PersonDataDetailItem">
          <template>{{language.MemberCenter.PersonalInformation.title}}</template>
          <div class="PersonDataDetailItemArrow"></div>
        </div>
      </router-link>
      <div @click="show" class="PersonDataDetailItem">
        <template>{{language.MemberCenter.ChangeLanguage.title}}</template>
        <div class="PersonDataDetailItemArrow"></div>
      </div>
      <router-link  to="/members/myPromotion">
        <div class="PersonDataDetailItem">
          <template>{{language.MemberCenter.MyPromotion.title}}</template>
          <div class="PersonDataDetailItemArrow"></div>
        </div>
      </router-link>
      <router-link  to="/members/Transaction_Management">
        <div class="PersonDataDetailItem">
          <template>交易管理</template>
          <div class="PersonDataDetailItemArrow"></div>
        </div>
      </router-link>
    </div>


    <div style=" margin-bottom: 8rem" class="PersonDataDetailItemWrapper">
      <router-link to="/members/OrderList">
        <div class="PersonDataDetailItem">
          <template>{{language.MemberCenter.TheOrderList.title}}</template>
          <div class="PersonDataDetailItemArrow"></div>
        </div>
      </router-link>

      <router-link to="/members/topUpList">
        <div class="PersonDataDetailItem">
          <template>{{language.MemberCenter.rechargeRecord.title}}</template>
          <div class="PersonDataDetailItemArrow"></div>  <div class="PersonDataDetailItemArrow"></div>
        </div>
      </router-link>

      <router-link to="/members/withDrawalList">
        <div class="PersonDataDetailItem">
          <template>{{language.MemberCenter.TakenOutRecord.title}}</template>
          <div class="PersonDataDetailItemArrow"></div>
        </div>
      </router-link>

      <div @click="aboutAone" class="PersonDataDetailItem" style="border: none;">
        <template>{{language.MemberCenter.aboutMe.title}}</template>
        <div class="PersonDataDetailItemArrow"></div>
      </div>
    </div>



    <changeLanguageBlock v-show="isShow" v-on:ChangeLanguageBlockHide="hideChangeLanguageBlock"></changeLanguageBlock>
  </div>
</template>

<script>

  import changeLanguageBlock from '../common/changeLanguageBlock'
  export default {
    data:function () {
      return{
        isShow:false,
        nickname:JSON.parse(localStorage.getItem('game_2_UserData')).nickname,
        username:JSON.parse(localStorage.getItem('game_2_UserData')).username,
        userUrl:JSON.parse(localStorage.getItem('game_2_UserData')).head_img,
        isShowPromotion:JSON.parse(localStorage.getItem('game_2_UserData')).commission_switch,
      }
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage
      },
      userDetial:function () {
        return JSON.parse(localStorage.getItem('game_2_UserData'))
      },
    },
    components:{
      changeLanguageBlock
    },
    methods:{
      hideChangeLanguageBlock:function (data) {
        this.isShow = data;
      },
      show:function () {
        $("html").css('overflow','hidden');
        $('.tradingMask').show();
      },
      aboutAone:function () {
        setTimeout(function () {
          $('.eduMask').css('height',$(window).height());
        },500)
        this.$router.push({ name: 'education'});
        this.$store.commit('aboutAone');
      }
    }

  }
</script>

<style>
  #members{
    background:url("../../assets/members/ty.png") no-repeat;
    background-size:26.785714rem ;
    padding-top: 4.857rem;
  }
  .PersonImg{
    width:4.58rem;
    height:4.58rem;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }
  .PersonName{
    font-family:PingFang-SC-Regular;
    color:rgba(255,255,255,1);
    font-size: 1rem;
    text-align: center;
    margin-top: 0.428571rem;
  }
  .PersonSet_Out_Money_Link_Block{
    width: 25.07rem;
    height: 2.857rem;
    background:rgba(8,8,8,1);;
    border-radius:3px;
    margin: 0 auto;
    margin-top: 2.44rem;
    box-shadow:0px 0px 20px 0px rgba(41,46,50,1);
    border-radius:40px;
    margin-bottom: 1.428rem;
  }
  .PersonSet_Out_Money_Link_Block a{
    display: inline-block;
    float: left;
    width: 12.5rem;
    height: 2.857rem;
    line-height: 2.857rem;
    font-family:PingFang-SC-Regular;
    color:#fff;
    box-sizing: border-box;
  }
  .PersonSet_Out_Money_Link_Block a img{
    width: 1.42857rem;
  }
  .PersonSet_Out_Money_Link_Block a:first-child{
    border-right:0.1rem solid rgba(52,56,66,1);
  }
  .PersonDataDetailItemWrapper{
    margin: 0 auto;
    margin-bottom: 2.07rem;
    box-shadow:0px 0px 20px 0px rgba(41,46,50,1);
    width: 25.07rem;
  }
  .PersonDataDetailItem{
    width: 25.07rem;
    height: 2.857rem;
    background:RGBA(8, 8, 8, 1);
    border-radius:3px;
    margin: 0 auto;
    line-height: 2.857rem;
    padding-left: 1rem;
    box-sizing: border-box;
    position: relative;
    text-align: left;
    color: #fff;
    border-bottom:1px solid rgba(52,56,66,1);
  }
  .PersonDataDetailItemArrow{
    display: inline-block;
    position: absolute;
    right: 0px;
    width: 3.071428rem;
    height: 2.857rem;
    background: url("../../assets/members/WitArrow.png") no-repeat center center;
    background-size:0.8rem;
  }

</style>
