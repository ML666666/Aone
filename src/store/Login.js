import { router } from '../router/index'
import axios from 'axios'
import gob from './config'
import qs from 'qs'
import { MessageBox } from 'mint-ui';
import ErrTipsObj from  './ErrorTips'
const state = {
    VCodeObj:null
}

const getters = {
   getVCodeObj:state => state.VCodeObj,
}

const mutations = {
  mutationForgetPassWord:async ({ dispatch, commit, getters }, data) => {
    var newObj = gob.getSign(data);
    axios.post(gob.apiUrl+'/Api/Member/forgetPwd',qs.stringify(newObj)).then(function (res) {
      if(!res.data.errorCode){
      }else{
        MessageBox.alert(res.data.errorMsg).then(action => {
        })
      }
    })
  },
  saveVcCode:async ({ dispatch, commit, getters }, data) => {
        state.VCodeObj = data;
  },
   mutationLogin:async ({ dispatch, commit, getters }, data) => {
      var newObj = gob.getSign(data);
      axios.post(gob.apiUrl+'/Api/Member/login',qs.stringify(newObj)).then(function (res) {
        if(!res.data.errorCode){
          gob.setUserData(res.data.re);
          router.replace({ name: 'information'});
        }else{
          //res.data.errorCode == 1005 无效手机号
          //res.data.errorCode == 1007 密码错误
          if(res.data.errorCode == 1005){
            MessageBox.alert(ErrTipsObj.getErrorTipsObj().Invalid_phone_number).then(action => {
            })
          }
          if(res.data.errorCode == 1007){
            MessageBox.alert(ErrTipsObj.getErrorTipsObj().Password_mistake).then(action => {
            })
          }
        }
      })
   },
  mutationRegistered:async ({ dispatch, commit, getters }, data) => {
    var newObj = gob.getSign(data);
    axios.post(gob.apiUrl+'/Api/Member/register',qs.stringify(newObj)).then(function (res) {
      if(!res.data.errorCode){
        gob.setUserData(res.data.re);
        MessageBox.alert(ErrTipsObj.getErrorTipsObj().Registered_Successfully+"!").then(action => {
          router.push({ name: 'trading'});
        });
      }else{
        //res.data.errorCode == 1015 密码有误
        //res.data.errorCode == 1006 手机号已经存在
        if(res.data.errorCode == 1015){
          MessageBox.alert(ErrTipsObj.getErrorTipsObj().The_password_is_wrong).then(action => {
          })
        }
        if(res.data.errorCode == 1006){
          MessageBox.alert(ErrTipsObj.getErrorTipsObj().number_already_exists).then(action => {
          })
        }
      }
    })
  }
}

const actions = {
   actionLogin(context,data){
     this.commit('mutationLogin',data);
   },
   actionRegistered(context,data){
     this.commit('mutationRegistered',data);
   },
}
export default {
  state,
  getters,
  mutations,
  actions
}
