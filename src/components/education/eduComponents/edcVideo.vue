<template>
 <div style="padding-top: 3.93rem;">
   <commentTop>视频</commentTop>
   <div class="closeItemWrapprt">
     <div @click="changeEduVideoList(0,20)" class="closeItem heightLight">1-20集</div>
     <div @click="changeEduVideoList(20,40)"class="closeItem">21-40集</div>
     <div @click="changeEduVideoList(40,60)"class="closeItem">41-60集</div>
     <div @click="changeEduVideoList(59,80)"class="closeItem">61-80集</div>
     <div @click="changeEduVideoList(80,86)"class="closeItem">81-86集</div>
   </div>
   <div class="VideoItemWrapper">
     <template v-for="v in getEduVideoTlist">
       <router-link tag="div" :to="{ name: 'eduVideoDetail'}">
         <div :url="v.url" :key_1="v.key" :name="v.name" class="VideoItem">
           <img  src="../../../assets/eduction/eduVideo.png" />
           <div class="VideoDetail">
             <p>区块链100问 - 第{{v.key}}集</p>
             <p>{{v.name}}</p>
           </div>
         </div>
       </router-link>
     </template>
   </div>
 </div>
</template>

<script>
    import commentTop from '../../common/commentTop'
    export default {
        name: "edc-video",
        components:{
          commentTop
        },
        mounted:function () {
          this.$store.dispatch('actionEduVideoList');

          let _this = this;
          $('.closeItem').click(function () {
            $('.closeItem').removeClass('heightLight');
            $(this).addClass('heightLight');
          })


          $(document).on('click','.VideoItemWrapper .VideoItem',function () {
                var obj = {
                  url:$(this).attr('url'),
                  key:$(this).attr('key_1'),
                  name:$(this).attr('name'),
                }
                _this.$store.commit('setVideoObj',obj);
          });
        },
        watch:{
          Tlist:function(val,oldval){
          },
        },
        data:function () {
          return{
            Tlist:[]
          }
        },
        computed:{
          geteEduVideoAllList:function () {
            return this.$store.getters.geteEduVideoAllList
          },
          getEduVideoTlist:function () {
           for(var i = 0; i<this.$store.getters.getEduVideoTlist.length; i++){
             var name = this.$store.getters.getEduVideoTlist[i].name;
             this.$store.getters.getEduVideoTlist[i].name = name.substring(name.indexOf("：")+1);
           }
            return this.$store.getters.getEduVideoTlist
          }
        },
        methods:{
          changeEduVideoList:function (lndex,lastIndex) {
            var obj = {
              lndex:lndex,
              lastIndex:lastIndex
            }
            this.$store.commit('changeEduVideoList',obj);
          },
        },
    }
</script>

<style scoped>
.closeItemWrapprt{
  height: 2.14rem;
}
.closeItemWrapprt .closeItem{
  display: inline-block;
  float: left;
  height: 2.14rem;
  line-height: 2.14rem;
  width: 4.28rem;
  color: #fff;
  font-size: 0.875rem;
  background: RGBA(31, 31, 31, 1);
  margin: 0 0.5rem;
}
.closeItemWrapprt  .heightLight{
  color: RGBA(26, 121, 255, 1);
}
.VideoItemWrapper{
  margin-top: 0.8rem;
  margin-bottom: 4rem;
}
.VideoItemWrapper div:last-child .VideoItem{
  border-bottom: 1px solid transparent;
}
.VideoItemWrapper .VideoItem{
  cursor:pointer;
  height: 7.678rem;
  padding: 0.857rem;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}
.VideoItemWrapper .VideoItem img{
  display: inline-block;
  width: 9.571rem;
  height: auto;
  float: left;
}
.VideoItemWrapper .VideoDetail{
  display: inline-block;
  width: 14.714rem;
  float: left;
  padding-left: 1.142rem;
  padding-top:1.285rem;
}
.VideoItemWrapper .VideoDetail p{
  text-align: left;
  font-size: 1rem;
  color: #fff;
}
.VideoItemWrapper .VideoDetail p:last-child{
  font-size: 0.875rem;
  margin-top: 0.714rem;
}
</style>
