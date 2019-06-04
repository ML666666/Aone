<template>
    <div  style="margin-bottom: 4rem; position: relative;padding-bottom: 2rem;padding-top:3.03rem;">

      <div v-if="list.length>0" class="marketBlock">
       <ul>
        <li  v-for="item in list" class="marketItem">
          <p class="marketItemTop">
            <span class="time">{{item.cdate | time}}</span>
            <img style="display:none; float: right; width: 1rem;height: auto" src="../../../assets/market/share.png" />
          </p>
          <div class="marketItemCon">
            <p>{{item.big_title}}</p>
            <div class="marketItemConWrapper">
              {{item.small_title}}
            </div>
          </div>
          <div class="marketButton">
            <template v-if="item.islike == 0">
              <span @click="like(item,1)"><img src="../../../assets/market/up.png"/>{{language.bullish}}&nbsp{{item.like}}</span>
              <span @click="like(item,-1)"><img  src="../../../assets/market/down.png"/>{{language.bearish}}&nbsp{{item.notlike}}</span>
            </template>
            <template v-else>
              <span @clike="" @click="like(item,1)">
                <img v-if="item.islike == 1" src="../../../assets/market/Hup.png"/><img v-else src="../../../assets/market/up.png"/>{{language.bullish}}&nbsp{{item.like}}
              </span>
              <span @click="like(item,-1)">
                <img v-if="item.islike == -1" src="../../../assets/market/Hdown.png"/><img v-else src="../../../assets/market/down.png"/>{{language.bearish}}&nbsp{{item.notlike}}
              </span>
            </template>
          </div>
        </li>
       </ul>
      </div>

      <Nothing v-if="list.length == 0"></Nothing>
    </div>

</template>

<script>
  import { router } from '../../../router/index.js';
  import { Toast } from 'mint-ui';
  import comTop from '../../common/BlackCommentTop';
  import axios from "axios";
  import qs from "qs";
  import { Indicator } from 'mint-ui';
  import gob from "../../../store/config.js";
  import ErrorTips from "../../../store/ErrorTips"
  import Nothing from "../../common/Nothingblock"
    export default {
        name: "market",
      components:{
        comTop,
        Nothing
      },
      computed:{
        language:function () {
          return this.$store.getters.getLanguage.information;
        }
      },
      filters:{
        time:function (value) {
          return  value.substring(value.indexOf(" "),value.lastIndexOf(":"))
        }
      },
      methods:{
        cancelLike (item,index) {
          var _this = this;
          let obj = {
            userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
            token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
            like:0,
            newsid:item.id,
          }
          let newObj = gob.getSign(obj);
          axios.post(gob.apiUrl + '/Api/News/like',qs.stringify(newObj)).then(function (res) {
            if(res.data.re){
              for(var i = 0; i<_this.list.length; i++){
                if(_this.list[i].id == item.id){
                  _this.list[i].islike = 0;
                  if(index == 1){
                    _this.list[i].like--
                  }else{
                    _this.list[i].notlike--
                  }
                }
              }
            }
          })
        },
        like(item,index){
          var _this = this;
          if(localStorage.getItem('game_2_UserData')){
            if(item.islike){
               if(item.islike == 1){
                  if(index == 1){
                    this.cancelLike(item,index);
                  }
               }else{
                 if(index == -1){
                   this.cancelLike(item,index);
                 }
               }
            }else{
              let obj = {
                userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
                like:index,
                newsid:item.id
              }
              let newObj = gob.getSign(obj);
              axios.post(gob.apiUrl + '/Api/News/like',qs.stringify(newObj)).then(function (res) {
                if(gob.isOutLogin(res)){
                  if(res.data.re){
                    for(var i = 0; i<_this.list.length; i++){
                      if(_this.list[i].id == item.id){
                        _this.list[i].islike = index;
                        if(index == 1){
                          _this.list[i].like++
                        }else{
                          _this.list[i].notlike++
                        }
                      }
                    }
                  }
                }

              })
            }
          }else {
            Toast({
              message: ErrorTips.getErrorTipsObj().Not_logged_in,
              position: 'top',
              duration: 2000
            });
            setTimeout(function () {
              router.replace("Login");
            }, 1000);
          }
        },
        getMore(){
          this.nWindowHight = $(window).height();
          this.nScrollTop = $(document).scrollTop();
          var _this = this;
          if(parseInt(this.nBodyHight + this.nScrollTop)+1 > parseInt($("body").height())){
            _this.getData(0);
          }
        },
        loadTop() {
          var q = $(document).scrollTop()
          if(q<50){
            this.getData(1);
            this.$refs.loadmore.onTopLoaded();
          }
        },
        loadBottom() {
        },
        getData(index) {
          var _this = this;
          var obj = null;
          if(localStorage.getItem('game_2_UserData')){
            if(index){
              obj = {
                page:1,
                size:10,
                userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
                language:localStorage.getItem('language')
              }
            }else{
              obj = {
                page:_this.page,
                size:10,
                userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
                language:localStorage.getItem('language')
              }
            }
          }else{
            if(index){
              obj = {
                page:1,
                size:10,
              }
            }else{
              obj = {
                page:_this.page,
                size:10,
              }
            }
          }
          if(!this.isLoading){
          this.isLoading = true;
          var newObj = gob.getSign(obj);
          axios.post(gob.apiUrl+'/Api/News/news',qs.stringify(newObj)).then(function (res) {
            $('.infoCanvasMask').fadeOut();
            if(index){
              _this.list = []
            }
            for(var i = 0; i< res.data.re.length; i++){
              if(index){
                _this.list.push(res.data.re[i])
                _this.isLoading = false;
              }else{
                _this.isLoading = false;
                _this.list.push(res.data.re[i]);
              }
            }
            if(_this.list.length>10){
              // Toast({
              //   message: ErrorTips.getErrorTipsObj().new_data,
              //   position: 'top',
              //   duration: 1000
              // });
            }else if(index){
              // Toast({
              //   message: ErrorTips.getErrorTipsObj().List_refresh_succeeded,
              //   position: 'top',
              //   duration: 1000
              // });
            }
          });
          _this.page++;
          if(index){
            this.$refs.loadmore.onTopLoaded();
          }
          this.isFrist = false;
          }
        }
      },
      data:function () {
        return{
          allLoaded:false,
          page:1,
          isFrist:true,
          list:[],
          size:60,
          isLoading:false,
          nWindowHight:0,
          nScrollTop:0,
          nBodyHight:$('body').height()
        }
      },

      beforeDestroy:function () {
        $(window).off('scroll',this.getMore);
      },
      mounted:function () {
        var _this = this;
        $(window).on('scroll',this.getMore);
        this.getData(0);
        $(document).on('click','.marketItemCon' ,function () {
            $(this).find('.marketItemConWrapper').addClass('isShow');
        });
      }



    }
</script>

<style scoped>
  .mint-toast.is-placetop{
    background: #5a5a5a !important;
  }
  .infoCanvasMask{
    position: fixed;
    top:0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    width: 100%;
    background: #000;
    z-index: 200;
    padding-top: 15rem;
    box-sizing: border-box;
  }
.marketBlock{
   width: 100%;
  color: #fff;
}
.marketBlock .marketItem{
  cursor:pointer;
  list-style: none;
  padding: 0.928rem 0.85rem 0.78rem 0.85rem ;
  border-bottom:2px solid rgba(255,255,255,0.2);
}
.marketBlock .marketItem *{
  transition: 0.3s;
}
.marketBlock .marketItem:last-child{
  border:2px solid rgba(255,255,255,0);
}
.marketBlock .marketItemTop *{
  display: inline-block;
  float: left;
}
.marketBlock .marketItemTop{
  height: 1.28rem;
}
.marketBlock .time{
  background:url("../../../assets/market/time.png") no-repeat center center;
  background-size: cover;
  width:3.57rem;
  height: 1.28rem;
  line-height: 1.28rem;
  padding-left: 0.85rem;
}
.marketBlock .marketItemCon{
  margin-bottom: 0.5rem;
}
.marketBlock .marketItemCon p{
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    margin-top: 0.714rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    transform: translateX(-0.4rem);
    white-space: nowrap;
}
.marketBlock .marketItemCon div{
  overflow: hidden;
  font-size: 0.928rem;
  text-align: left;
  /*height: 3.72rem;*/
}
.marketBlock .isShow{
  height: auto !important;
}
.marketButton{
  text-align: right;
  font-size: 0.78rem;
  line-height: 1rem;
}
.marketButton span{
  display: inline-block;
  height: 1.3rem;
  line-height: 1.3rem;
  border: 1px solid rgba(255,255,255,0.4);
  position: relative;
  border-radius: 36px;
  padding-left: 0.342rem;
  padding-right: 0.342rem;
  box-sizing: border-box;
}
 .marketButton span:before{
   /*position: absolute;*/
   /*height: 1.22rem;*/
   /*width: 1.22rem;*/
   /*border-radius: 50%;*/
   /*content: "";*/
   /*border: 1.3px solid rgba(255,255,255,1);*/
   /*border-bottom: none;*/
   /*border-right: none;*/
   /*transform: rotate(300deg);*/
   /*top: -1px;*/
   /*left: -0.6rem;*/
  }
 .marketButton span:after{
   /*position: absolute;*/
   /*height: 1.22rem;*/
   /*width: 1.22rem;*/
   /*border-radius: 50%;*/
   /*content: "";*/
   /*border: 1.3px solid rgba(255,255,255,1);*/
   /*border-bottom: none;*/
   /*border-right: none;*/
   /*-webkit-transform: rotate(491deg);*/
   /*transform: rotate(489deg);*/
   /*top: -1.2px !important;*/
   /*right: -0.6rem !important;*/
  }
.marketButton span:last-child{
  margin-left: 0.74rem;
}
.marketButton img{
  width: 1rem;
  height: auto;
  margin-right: 0.3rem;
  transform: translateY(-10%);
}
</style>
