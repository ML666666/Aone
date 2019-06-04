import gob from "./config";
import axios from "axios";
import qs from "qs";

const state = {
  OrderList:[],
  promote:{}
}

const getters = {
  getOrderList:state=>state.OrderList,
  getPromote:state=>state.promote
}

const mutations = {
  getOrderList:async ({ dispatch, commit, getters }, data) => {
    var newObj = gob.getSign(data);
    console.log(newObj);
    axios.post(gob.apiUrl+'/Api/Member/userOrders',qs.stringify(newObj)).then(function (res) {
         if(gob.isOutLogin(res)){
           state.OrderList = res.data.re;
         }
    })
  },
  getPromote:async ({ dispatch, commit, getters }, data) => {
    var obj = {
      userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
      token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
    }
    let newObj = gob.getSign(obj);
    axios.post(gob.apiUrl + '/Api/Member/promote',qs.stringify(newObj)).then(function (res) {
      state.promote = res.data.re;
      console.log(res.data.re);
      console.log(state.promote)
    });
  }
}

const actions = {
  actionOrderList(context,data){
    this.commit('getOrderList',data);
  },
  actionPromote(context,data){
    this.commit('getPromote',data);
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
