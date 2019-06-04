import Vue from 'vue'
import {Indicator, MessageBox, Toast} from 'mint-ui';
import Router from 'vue-router'

//个人中心模块
import members from '@/components/members/members'
import TopUp from '@/components/members/page/top-up'
import withDraWal from '@/components/members/page/withdrawal'
import OrderList from '@/components/members/page/OrderList'
import topUpList from '@/components/members/page/topUpList'
import userDetail from '@/components/members/page/userDetail'
import myTeam from '@/components/members/page/myTeam'
import withDrawalList from '@/components/members/page/withDrawalList'
import myPromotion from '@/components/members/page/myPromotion'
import PomotionRude from '@/components/members/page/PomotionRude'
import merReSetPassWord from '@/components/members/page/ReSetPassWord'
import reSetUserHeader from  '@/components/members/page/reSetUserHeader'
import MakeSureTopUp from  '@/components/members/page/MakeSureTopUp'
import Real_name_authentication from  '@/components/members/page/Real_name_authentication'
import Advanced_real_name_authentication from  '@/components/members/page/Advanced_real_name_authentication'
import Transaction_Management from  '@/components/members/page/Transaction_Management'
import Payment_methods from  '@/components/members/page/Payment_methods'
import buy_order_list from  '@/components/members/page/buy_order_list'
import sell_order_list from  '@/components/members/page/sell_order_list'

//游戏模块
import trading from '@/components/index/trading'
import BTC from '@/components/index/BTC'
import ETH from '@/components/index/ETH'
import LTC from '@/components/index/LTC'
import BACK from '@/components/index/backPage'


//登录模块
import Login from  '@/components/LoginBlock/Login'
import register from  '@/components/LoginBlock/register'
import forgetPassWord from  '@/components/LoginBlock/forgetPassWord'
import reSetPassWord from  '@/components/LoginBlock/reSetPassWord'


//资讯模块
import marketWrapper from '@/components/market/marketWrapper'
import InterpretationDetail from '@/components/market/marketComponents/InterpretationDetail'


//行情模块
import information from  '@/components/information/information'
import infoDetail from  '@/components/information/infoDetail'


//j教育模块
import education from  '@/components/education/education'
import educationDetail from  '@/components/education/educationDetail'
import eduVideoDetail from  '@/components/education/edcVideoDetail'
import eduAritcle from '@/components/education/eduComponents/edcArticle'
import eduVideo from '@/components/education/eduComponents/edcVideo'


//交易所模块
import exchange from  '@/components/exchange/exchange'
import sell from '@/components/exchange/sellPage/sell'
import sellDetail from '@/components/exchange/sellPage/sellDetail'
import waitForPay from '@/components/exchange/sellPage/waitForPay'

import axios from 'axios'
import qs from "qs"
import gob from "../store/config"
import ErrorTips from "../store/ErrorTips"
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: information,
      meta:{
        public:true,
        indexlevel:0,
        isBlack:true
      },
    },
    //热点模块
    {
      path: '/market',
      name: 'market',
      component: marketWrapper,
      meta:{
        public:true,
        indexlevel:1,
        isBlack:true
      },
    },
    {
      path: '/market/InterpretationDetail',
      name: 'InterpretationDetail',
      component: InterpretationDetail,
      meta:{
        public:true,
        isBlack:false
      },
    },

    //交易所模块
    {
      path: '/exchange',
      name: 'exchange',
      component: exchange,
      meta:{
        public:true,
        indexlevel:3,
        isBlack:true
      },
    },
    {
      path: '/exchange/sell',
      name: 'sell',
      component: sell,
      meta:{
        public:true,
        isBlack:false
      },
    },
    {
      path: '/exchange/sellDetail',
      name: 'sellDetail',
      component: sellDetail,
      meta:{
        public:true,
        isBlack:false
      },
    },
    {
      path: '/exchange/waitForPay',
      name: 'waitForPay',
      component: waitForPay,
      meta:{
        public:true,
        isBlack:false
      },
    },



    //教育模块
    {
      path: '/education/eduVideo',
      name: 'eduVideo',
      component: eduVideo,
      meta:{
        public:true,
        isBlack:false
      },
    },
    {
      path: '/education/eduAritcle',
      name: 'eduAritcle',
      component: eduAritcle,
      meta:{
        public:true,
        isBlack:false
      },
    },
    {
      path: '/education/educationDetail',
      name: 'educationDetail',
      component: educationDetail,
      meta:{
        public:true,
        isBlack:false
      },
    },
    {
      path: '/education/eduVideoDetail',
      name: 'eduVideoDetail',
      component: eduVideoDetail,
      meta:{
        public:true,
        isBlack:false
      },
    },

    //行情模块
    {
      path: '/information',
      name: 'information',
      component: information,
      meta:{
        public:true,
        indexlevel:0,
        isBlack:true
      },
    },
    {
      path: '/information/infoDetail',
      name: 'infoDetail',
      component: infoDetail,
      meta:{
        public:true,
        isBlack:false
      },
    },


    //游戏模块
    {
      path: '/trading',
      name: 'trading',
      component: trading,
       meta:{
        public:true,
        indexlevel:2,
         isBlack:true
      },
      children: [
        {
          path: '/trading/BTC',
          name: 'BTC',
          component: BTC,
          meta:{
            public:true,
            indexlevel_2:0,
            indexlevel:2,
            isBlack:true
          },
          beforeEnter: (to, from, next) => {
            localStorage.setItem('RF_Page',to.name);
            next();
          }
        },
        {
          path: '/trading/ETH',
          name: 'ETH',
          component: ETH,
          meta:{
            public:true,
            indexlevel_2:1,
            indexlevel:2,
            isBlack:true
          },
          beforeEnter: (to, from, next) => {
           localStorage.setItem('RF_Page',to.name);
            next();
          }
        },
        {
          path: '/trading/LTC',
          name: 'LTC',
          component: LTC,
          meta:{
            public:true,
            indexlevel_2:3,
            indexlevel:2,
            isBlack:true
          },
          beforeEnter: (to, from, next) => {
            localStorage.setItem('RF_Page',to.name);
            next();
          }
        },
        {
          path: '/trading/BACK',
          name: 'BACK',
          component: BACK,
          meta:{
            public:true,
            indexlevel_2:1,
            indexlevel:2,
            isBlack:true
          }
        },
      ]
    },


    //个人中心
    {
      path: '/members',
      name: 'members',
      component: members,
      meta:{
        public:false,
        indexlevel:4,
        isBlack:true
      },
    },
    {
      path: '/members/Transaction_Management/sell_order_list',
      name: 'sell_order_list',
      component: sell_order_list,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/Transaction_Management/buy_order_list',
      name: 'buy_order_list',
      component: buy_order_list,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/Transaction_Management/Payment_methods',
      name: 'Payment_methods',
      component: Payment_methods,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/Real_name_authentication',
      name: 'Real_name_authentication',
      component: Real_name_authentication,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/Transaction_Management',
      name: 'Transaction_Management',
      component: Transaction_Management,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/Advanced_real_name_authentication',
      name: 'Advanced_real_name_authentication',
      component: Advanced_real_name_authentication,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/OrderList',
      name: 'OrderList',
      component: OrderList,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/topUpList',
      name: 'topUpList',
      component: topUpList,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/userDetail',
      name: 'userDetail',
      component: userDetail,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/withDrawalList',
      name: 'withDrawalList',
      component: withDrawalList,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/TopUp',
      name: 'TopUp',
      component: TopUp,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/withDraWal',
      name: 'withDraWal',
      component: withDraWal,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/myTeam',
      name: 'myTeam',
      component: myTeam,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/myPromotion',
      name: 'myPromotion',
      component: myPromotion,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/PomotionRude',
      name: 'PomotionRude',
      component: PomotionRude,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/merReSetPassWord',
      name: 'merReSetPassWord',
      component: merReSetPassWord,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/reSetUserHeader',
      name: 'reSetUserHeader',
      component: reSetUserHeader,
      meta:{
        public:false,
      },
    },
    {
      path: '/members/MakeSureTopUp',
      name: 'MakeSureTopUp',
      component: MakeSureTopUp,
      meta:{
        public:false,
      },
     },


    //登录模块
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        public:true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta:{
        public:true,
      },
    },
    {
      path: '/forgetPassWord',
      name: 'forgetPassWord',
      component: forgetPassWord,
      meta:{
        public:true,
      },
    },
    {
      path: '/reSetPassWord',
      name: 'reSetPassWord',
      component: reSetPassWord,
      meta:{
        public:false,
      },
      beforeEnter: (to, from, next) => {
       if(from.name == null){
         next('/forgetPassWord');
        }else{
         next();
        }
      }
    }

  ]
})
router.isBack = false;
router.goBack = function () {
  this.isBack = true;
  this.go(-1);
}

router.isBottomShow = true;
router.beforeEach((to, from, next) => {
  router.nowPage = to.name;
   // if(to.name == 'members' || to.name == 'trading' || to.name == 'market' || to.name == 'education' || to.name == 'information'){
  if(to.meta.isBlack){
     if(to.name == 'trading' ){
       next("/trading/BTC");
     }
     router.isBottomShow = true;
   }else{
     router.isBottomShow = false;
   }
  if(localStorage.getItem('game_2_UserData')){
     if(to.meta.public){
       next();
     }else{
       let obj = {
         userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
         token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
       }
       let newObj = gob.getSign(obj);
       axios.post(gob.apiUrl + '/Api/Member/userInfo',qs.stringify(newObj)).then(function (res) {
         if(res.data.re){
           var obj  = JSON.parse(localStorage.getItem("game_2_UserData"));
           obj.balance = res.data.re.balance;
           localStorage.setItem('game_2_UserData',JSON.stringify(obj))
         }
         if(res.data.errorCode == '1040'){
           Toast({
             message: ErrorTips.getErrorTipsObj().login_timeout,
             position: 'top',
             duration: 2000
           });
           setTimeout(function () {
             localStorage.removeItem("game_2_UserData");
             Indicator.close();
             router.replace("Login");
           },1000);
         }else if(res.data.errorCode == '1010'){
           Toast({
             message:  ErrorTips.getErrorTipsObj().login_timeout.login_again,
             position: 'top',
             duration: 2000
           });
           setTimeout(function () {
             localStorage.removeItem("game_2_UserData");
             Indicator.close();
             router.replace("Login");
           },1000);
         }else{
           next();
         }
       })
     }
  }else{
     if(to.meta.public){
       next();
     }else{
       if(from.meta.public){
         Toast({
           message: ErrorTips.getErrorTipsObj().Not_logged_in,
           position: 'top',
           duration: 2000
         });
         next('/Login');
       }else{
         Toast({
           message: ErrorTips.getErrorTipsObj().Not_logged_in,
           position: 'top',
           duration: 2000
         });
         next('/Login');
       }
     }
  }

});

export {
  router
}
