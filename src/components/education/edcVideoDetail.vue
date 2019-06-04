<template>
  <div style="padding-bottom: 5rem">
    <comTop>区块链100问-第{{getEduObj.key}}集</comTop>
    <hVideo :url="url"></hVideo>
    <div>
      <div class="HVideoTitle">
        {{getEduObj.name}}
      </div>
      <div class="HVideoTitle">
        选集
      </div>
    </div>
    <div class="closeItemWrpper">
      <div @click="changeEduVideoList(0,20)" :class="{ heightLight: getEduObj.key>=1 && getEduObj.key<=20 }" class="closeItem">1-20集</div>
      <div @click="changeEduVideoList(20,40)" :class="{ heightLight: getEduObj.key>=21 && getEduObj.key<=40 }"class="closeItem">21-40集</div>
      <div @click="changeEduVideoList(40,60)" :class="{ heightLight: getEduObj.key>=41 && getEduObj.key<=60 }"class="closeItem">41-60集</div>
      <div @click="changeEduVideoList(60,80)" :class="{ heightLight: getEduObj.key>=61 && getEduObj.key<=80 }"class="closeItem">61-80集</div>
      <div @click="changeEduVideoList(80,86)" :class="{ heightLight: getEduObj.key>=81 && getEduObj.key<=86 }" class="closeItem">81-86集</div>
    </div>
    <div class="closeAllItemWrapper">
      <template v-for="v in getEduVideoTlist">
         <div  :url="v.url" :key_1="v.key" :name="v.name" :class="{ heightLight: getEduObj.key == v.key }" class="closeItem">{{v.key}}</div>
      </template>
    </div>
  </div>

</template>

<script>
  import hVideo from './eduComponents/eduVideoComponent/videoWrapper'
  import comTop from '../common/commentTop'
    export default {
        name: "edc-video-detail",
        components:{
          comTop,
          hVideo
        },
       computed:{
         geteEduVideoAllList:function () {
           return this.$store.getters.geteEduVideoAllList
         },
         getEduVideoTlist:function () {
           return this.$store.getters.getEduVideoTlist
         },
         getEduObj:function () {
           return this.$store.getters.getEduObj
         }
       },
      data:function () {
        return{
          url:null,
          isChange:false
        }
      },
       methods:{
         changeEduVideoList:function (lndex,lastIndex) {
           var obj = {
             lndex:lndex,
             lastIndex:lastIndex
           }
           this.$store.commit('changeEduVideoList',obj);
         }
       },
       watch:{
         getEduObj:function (val) {
           this.url = val.url;
         }
       },
        mounted:function () {
          let _this = this;
          _this.$store.commit('setVideoObj');
          $('.closeItemWrpper  .closeItem').click(function () {
            $('.closeItemWrpper  .closeItem').removeClass('heightLight');
            $(this).addClass('heightLight');
            $('.closeAllItemWrapper  .closeItem').removeClass('heightLight');
          })

          $(document).on('click','.closeAllItemWrapper  .closeItem',function () {
            $('.closeAllItemWrapper  .closeItem').removeClass('heightLight');
            $(this).addClass('heightLight');
            _this.isChange = !_this.isChange;
            _this.url = $(this).attr('url');
            var obj = {
              url:$(this).attr('url'),
              key:$(this).attr('key_1'),
              name:$(this).attr('name'),
            }
            _this.$store.commit('setVideoObj',obj);
          });

          var key = _this.getEduObj.key;
          var obj = {
            lndex:null,
            lastIndex:null
          }
          if(key>=1 && key<=20){
            obj.lndex = 0;
            obj.lastIndex = 20;
          }else if(key>=21 && key<=40){
            obj.lndex = 20;
            obj.lastIndex = 40;
          }else if(key>=41 && key<=60){
            obj.lndex = 40;
            obj.lastIndex = 60;
          }else if(key>=61 && key<=80){
            obj.lndex = 60;
            obj.lastIndex = 80;
          }else{
            obj.lndex = 80;
            obj.lastIndex = 86;
          }
          if(this.geteEduVideoAllList.length){
            this.$store.commit('changeEduVideoList',obj);
          }else{
            this.$store.dispatch('actionEduVideoList',obj);
          }
        }
    }
</script>

<style scoped>
.HVideoTitle{
  line-height: 3.46rem;
  height: 3.46rem;
  padding-left: 0.875rem;
  font-size: 0.928rem;
  color: #FFF;
  text-align: left;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}
.closeItemWrpper .heightLight, .closeAllItemWrapper .heightLight{
   color: RGBA(26, 121, 255, 1) !important;
}
 .HVideoTitle:last-child{
   border-bottom: none;
   font-size: 0.928rem;
 }
 .closeItemWrpper{
   height: 3.214rem;
   border-bottom: 1px solid rgba(255,255,255,0.3);
 }
 .closeItemWrpper  .closeItem{
   cursor:pointer;
   display: inline-block;
   float: left;
   width: 4.2851rem;
   height:2.14rem;
   line-height: 2.14rem;
   color: #fff;
   background:rgba(31,31,31,1);
   font-size: 0.928rem;
   margin-left: 0.5rem;
   margin-right: 0.5rem;
 }
  .closeAllItemWrapper{
    padding-top:1.071rem;
    padding-left: 0.857rem;
    padding-right: 0.857rem;
  }
  .closeAllItemWrapper:after{
    display: table;
    content: " ";
    clear: both;
    height:0px;
  }
  .closeAllItemWrapper div{
    cursor:pointer;
    width: 3.571rem;
    line-height: 2.14rem;
    background:rgba(31,31,31,1);
    color: #fff;
    font-size: 0.928rem;
    display: inline-block;
    float: left;
    margin-right: 1.771rem;
    margin-bottom: 1.071rem;
  }
.closeAllItemWrapper div:nth-child(5n){
    margin-right: 0rem;
}
.closeAllItemWrapper div:nth-child(5n){
  margin-right: 0rem;
}
</style>
