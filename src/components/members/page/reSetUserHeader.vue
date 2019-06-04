<template>
    <div  style="padding-top: 3.1428rem;">
      <comTop>
        {{language.title}}
      </comTop>
    <input style="display: none;"  accept="image/png,image/gif,image/jpeg,image/jpg" @change="changeHeaderICON"  type="file" id="changeHeader"/>
    <transition name="vux-pop-nor"  mode="out-in">
      <div class="reSetHeaderMask">
        <div class="reSetHeaderButtomGround">
          <label for="changeHeader"><div  class="reSetHeaderButtomGroundItem">{{language.Select_photo}}</div></label>
          <div  @click="hide" class="reSetHeaderButtomGroundItem closetHeaderButtomGroundItem">{{language.Cancel}}</div>
        </div>
      </div>
    </transition>
    <img v-if="haveHeader"   @click="show"   class="header"  src="../../../assets/commentImg/header_3.png"/>
      <img v-if="!haveHeader"   @click="show"   class="header"  :src="headerUrl"/>
    </div>
</template>

<script>
  import comTop from '../../common/commentTop'
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import { Toast } from 'mint-ui';
  import  error from '../../../store/ErrorTips'
  export default {
    name: "user-detail",
    components:{
      comTop
    },
    mounted:function () {
      if(JSON.parse(localStorage.getItem('game_2_UserData')).head_img){
         this.headerUrl = JSON.parse(localStorage.getItem('game_2_UserData')).head_img
        this.haveHeader = false;
      }else{
        this.haveHeader = true;
      }
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage.Switch_Head
      },
    },
    data(){
      return{
        isShow:true,
        haveHeader:false,
        headerUrl:""
      }
    },
    methods:{
      hide:function () {
        $('.reSetHeaderMask').fadeOut();
        this.$router.goBack()
      },
      show:function () {
        $('.reSetHeaderMask').fadeIn();
      },
      changeHeaderICON:function (e) {
        let file = e.target.files[0];
        let param = new FormData();
        param.append('file', file, file.name);
        param.append('chunk', '0');

        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        let _this = this;
        axios.post(gob.apiUrl + '/api/Member/updateImg', param, config).then(function (res) {
            var obj = JSON.parse(localStorage.getItem('game_2_UserData'));
            obj.head_img = gob.apiUrl + res.data.re.img;
            let obj_2 = {
              code:"headimg",
              svalue:res.data.re.img,
              userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
              token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
            }
          let newObj = gob.getSign(obj_2);
          axios.post(gob.apiUrl + '/api/member/userInfoModify',qs.stringify(newObj)).then(function (res) {
            console.log(res);
            if(res.data.re){
              localStorage.setItem('game_2_UserData',JSON.stringify(obj));
              _this.headerUrl = JSON.parse(localStorage.getItem('game_2_UserData')).head_img
              _this.haveHeader = false;
              $('.reSetHeaderMask').fadeOut();
              Toast({
                message:error.getErrorTipsObj().Modified_avatar_successfully,
                position: 'top',
                duration: 1000
              });
            }else{
              Toast({
                message:error.getErrorTipsObj().Modified_avatar_failed,
                position: 'top',
                duration: 1000
              });
            }
          });
        });
      }

    }
  }
</script>

<style scoped>
   .header{
     width: 16.428rem;
     height: 16.428rem;
     display: block;
     margin: 0 auto;
     margin-top: 10rem;
   }
  .reSetHeaderMask{
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: rgba(0,0,0,0.6);
  }
  .reSetHeaderButtomGround{
    position: absolute;
    bottom: 0px;
  }
  .reSetHeaderButtomGroundItem{
    height: 3.42rem;
    background: rgba(41,46,50,1);;
    text-align: center;
    line-height: 3.42rem;
    width:26.7857rem;
    color: #fff;
    border-bottom: 0.28rem solid RGBA(96, 98, 100, 1);
  }
  .closetHeaderButtomGroundItem{
    height: 3.6428rem;
    line-height: 3.6428rem;
    color: #fff;
    border-bottom: 0.28rem solid RGBA(96, 98, 100, 0);
  }
</style>
