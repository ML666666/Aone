<template>
  <div  style="padding-top: 3.1428rem;">

    <transition name="vux-pop-nor"  mode="out-in">
    <div v-if="isMaskshow" class="topUplistMask">
      <div class="topUplistMaskItemWrapper">
        <div class="topUplistMaskItem">
          <div class="topUplistTipsBar">
            <div v-bind:class="{ heightLight: state_Obj.audit_state == 0 || state_Obj.audit_state == 2 }" class="topUplistTipsBarRadius"></div>
            <div v-bind:class="{ heightLight: state_Obj.audit_state == 1 || state_Obj.audit_state == 2 }" class="topUplistTipsBarRadius"></div>
            <div v-bind:class="{ heightLight: state_Obj.audit_state == 2 }" class="topUplistTipsBarRadius"></div>
          </div>
          <div class="topUplistTips">
            <span class="topUplistTipsItem">{{language.apply_for}}</span>
            <span class="topUplistTipsItem">{{language.Review_background}}</span>
            <span class="topUplistTipsItem">{{language.Withdraw_S}}</span>
          </div>
        </div>
        <div v-show="state_Obj.process_result" class="topUplistMaskItem">
          <span style="color: RGBA(251, 62, 81, 1)">{{state_Obj.process_result}}</span>
        </div>
        <div @click="tipsHide()" class="topUplistMaskItem">
          {{language.got_it}}
        </div>
      </div>
    </div>
    </transition>

    <comTop>
      {{language.title}}
    </comTop>

    <template v-if="getOrderList.length">

     <template v-for="v in getOrderList">
       <div class="SetDrawalListBlock">
         <div class="SetDrawalListBlockMonth">
          {{v.time}}
         </div>
         <div class="SetDrawalListBlockItemWrapper">
           <template v-for="k in v.array">
             <div @click="tipsShow(k)" class="SetDrawalListBlockItem">
               <img src="../../../assets/info/down.png" />
               <div class="SetDrawalListBlockDate">
                 <p>
                   <span>USDT</span>
                   <span style="font-size: 1rem">{{k.deposit | Fixed}}USDT</span>
                 </p>
                 <p>
                   <span>{{k.cdate}}</span>
                   <span  class="isOk">
                      <template v-if="k.audit_state == 0">
             {{language.Not_audit}}
            </template>
            <template v-if="k.audit_state == 1">
              {{language.Already_audit}}
            </template>
            <template v-if="k.audit_state == -1">
              {{language.Withdrawal_failure}}
            </template>
            <template v-if="k.audit_state == 2">
              {{language.Withdraw_S}}
            </template>
                   </span>
                 </p>
               </div>
             </div>
           </template>
         </div>
       </div>
     </template>
    </template>
    <template v-else>
      <Nothingblock></Nothingblock>
    </template>
  </div>
</template>

<script>
  import comTop from '../../common/commentTop'
  import Nothingblock from '../../common/Nothingblock'
  import axios from "axios";
  import qs from "qs";
  import { Indicator } from 'mint-ui';
  import gob from "../../../store/config.js";
  export default {
    components:{
      comTop,
      Nothingblock
    },
    data:function () {
      return{
        getOrderList:[],
        isMaskshow:false,
        state_Obj:{}
      }
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage.Withdraw_list
      },
    },
    filters:{
      Fixed:function (val) {
        return (val-0).toFixed(2)
      }
    },
    methods:{
      tipsShow:function (obj) {
       // $('.topUplistMask').fadeIn();
        this.isMaskshow = true;
        this.state_Obj = obj;
        console.log(obj)
      },
      tipsHide:function () {
        ///$('.topUplistMask').fadeOut();
        this.isMaskshow = false;
      }
    },
    mounted:function () {
      $('.topUplistMask').height($(window).height());

      var obj = {
        userid: JSON.parse(localStorage.getItem('game_2_UserData')).id,
        token: JSON.parse(localStorage.getItem('game_2_UserData')).token,
      }
      var _this = this;
      var newObj = gob.getSign(obj);
      axios.post(gob.apiUrl+'/Api/Member/depositLog',qs.stringify(newObj)).then(function (res) {
        if(gob.isOutLogin(res)){
          if(gob.isOutLogin(res)){
            if(res.data.re){
              let s = new Set();
              for(var i = 0; i<res.data.re.length; i++){
                res.data.re[i].cdate = res.data.re[i].cdate.substring(0,res.data.re[i].cdate.indexOf(" "));
                s.add(res.data.re[i].cdate);
              }
              var num = [...s];
              for(var w = 0; w<num.length;w++){
                var obj = {
                  time:null,
                  array:[]
                };
                obj.time = num[w];
                for(var k = 0; k<res.data.re.length; k++){
                  if(res.data.re[k].cdate == num[w]){
                    obj.array.push(res.data.re[k])
                  }
                }
                _this.getOrderList.push(obj);
              }
            }else{
              _this.getOrderList.length = [];
            }
          }
          Indicator.close();
        }
      })
    }
  }
</script>

<style scoped>
  .SetDrawalListBlockItemWrapper{
    box-shadow:0px 0px 24px 0px rgba(41,46,50,0.5);
  }
  .SetDrawalListBlockItemWrapper .isOk{
    color: RGBA(74, 144, 226, 1);
  }
  .SetDrawalListBlockItemWrapper .isNotOk{
    color: RGBA(246, 98, 107, 1);
  }
  .topUplist{
    position: relative;
  }
  .topUplistMask{
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 200;
    display: block;
  }
  .topUplistMask .topUplistMaskItem:nth-child(1){
    width: 100%;
    height: 4.571rem;
    background: RGBA(33, 38, 41, 0.2);
    border-bottom:0.0714rem solid rgba(255,255,255,0.2);
    position: relative;
  }
  .topUplistTips{
    position: absolute;
    top: 2.214rem;
    font-size: 0.875rem;
    color: #fff;
  }
  .topUplistTipsBar{
    width: 20.928rem;
    background:rgba(255,255,255,0.3);
    position: absolute;
    top:1.214rem;
    height: 0.142rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .topUplistTipsBar .topUplistTipsBarRadius{
    position: absolute;
    width: 0.428rem;
    height: 0.428rem;
    /* background: rgba(26,121,255,1); */
    border-radius: 50%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    border: 1px solid #fff;
    background: RGBA(32, 36, 39, 1);
  }
  .topUplistTipsBar .heightLight{
    background: rgba(26,121,255,1);
    border-color: rgba(26,121,255,1);
  }
  .topUplistTipsBar .topUplistTipsBarRadius:nth-child(2){
    left: 10.28rem;
  }
  .topUplistTipsBar .topUplistTipsBarRadius:nth-child(3){
    right: 0rem;
  }
  .topUplistTips .topUplistTipsItem:nth-child(1){
    margin-left: 0.875rem;
    margin-right: 7rem;
  }
  .topUplistTips .topUplistTipsItem:nth-child(2){
    margin-right: 7rem;
  }
  .topUplistMask .topUplistMaskItem:nth-child(2){
    height: 3.28rem;
    width: 100%;
    border-bottom:0.285rem solid rgba(255,255,255,0.3);
    line-height:  3.28rem;
    box-sizing: content-box;
    font-size: 0.857rem;
  }
  .topUplistMask .topUplistMaskItem:nth-child(3){
    height: 3.64rem;
    width: 100%;
    color: rgba(255,255,255,1);
    font-size: 1.0714rem;
    line-height: 3.64rem;;
  }
  .topUplistMaskItemWrapper{
    position: absolute;
    bottom: 0px;
    width: 100%;
    background: RGBA(33, 38, 41, 0.85);
  }
  .SetDrawalListBlock{
    width:26.7857rem;
    margin: 0 auto;
  }
  .SetDrawalListBlockMonth{
    box-sizing: border-box;
    text-align: left;
    line-height:3.357rem;
    padding-left: 1.285rem;
    font-family:PingFang-SC-Regular;
    color:#FFF;
    font-size: 1rem;
  }
  .SetDrawalListBlockItem{
    height: 4.428rem;
    background:RGBA(8, 8, 8, 1);
    position: relative;
    border-bottom:1px solid rgba(255,255,255,0.2);
  }
  .SetDrawalListBlockItem:last-child{
    border-bottom:1px solid rgba(255,255,255,0);
  }
  .SetDrawalListBlockItem img{
    display: inline-block;
    width:2.14rem;
    float: left;
    height: auto;
    margin-left: 0.875rem;
    margin-top: 1.142rem;
  }
  .SetDrawalListBlockDate{
    height: 100%;
    display: inline-block;
    float: left;
    width: 22rem;
    margin-left: 0.857rem;
  }
  .SetDrawalListBlockDate p{
    text-align: left;
    font-family:PingFang-SC-Regular;
    color:#fff;
    position: relative;
  }
  .SetDrawalListBlockDate p span:last-child{
    position: absolute;
    right: 0px;
  }
  .SetDrawalListBlockDate p:first-child{
    font-size: 0.928rem;
    margin-top: 0.875rem;
    margin-bottom: 0.428rem;
  }
  .SetDrawalListBlockDate p:last-child{
    font-size: 0.785714rem;
  }
</style>
