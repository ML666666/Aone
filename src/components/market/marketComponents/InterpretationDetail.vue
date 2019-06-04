<template>
   <div style="padding-top: 3.142rem" class="interpretationDetailContainer">
       <comTop>解读</comTop>
       <p class="h1">{{obj.big_title}}</p>
       <p class="data">{{obj.cdate}}</p>
       <div class="Detail" v-html="obj.small_title">
         {{obj.small_title}}
       </div>
   </div>
</template>

<script>
    import comTop from '../../common/commentTop'
    export default {
        name: "interpretation-detail",
        components:{
          comTop
        },
      mounted:function () {
        var _this = this;
        console.log(this.list)
        if(this.list.length){
          for (var i = 0; i<this.list.length;i++){
            if(this.$route.query.id == this.list[i].id){
              this.obj = this.list[i];
              console.log(obj);
              break;
            }else{
            }
          }
        }else{
          this.$router.push({'name':"market"})
        }
      },
      data:function () {
        return{
          obj:{}
        }
      },
      computed:{
        list:function () {
          return this.$store.getters.getInterpreTationList
        }
      }
    }
</script>

<style scoped>
.interpretationDetailContainer{
  margin: 0 auto;
}
.interpretationDetailContainer *{
  color: #fff;
}
.interpretationDetailContainer .h1{
  font-size:1rem;
  font-weight:500;
  line-height:1.428rem;
  margin-top: 1rem;
  margin-left: 1.357rem;
  text-align: left;
}
.data{
  text-align: left;
  padding-left: 0.857rem;
  margin-top: 0.857rem;
  margin-bottom: 0.857rem;
  font-size:0.785rem;
  line-height:1.142rem;
}
.Detail {
  text-align: left;
  font-size:0.928rem;
  line-height:1.285rem;
  padding: 0 0.857rem;
  margin-bottom: 3rem;
}
 .Detail img{
    width:12.571rem;
    height:9.428rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 0.928rem;
  }
 .Detail p{
   font-size:0.928rem;
   font-weight:500;
   color:rgba(255,255,255,1);
   line-height:1.285rem;
   margin-bottom: 0.928rem;
 }
  /*p{*/
    /*width:756px;*/
    /*margin-bottom: 24px;*/
    /*line-height: 21px;*/
    /*text-align: left;*/
  /*}*/
</style>
