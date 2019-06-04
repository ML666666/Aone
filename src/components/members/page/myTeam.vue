<template>
    <div  style="padding-top: 3.1428rem;">
      <comTop>{{language.My_teammates}}</comTop>
      <div class="teamground">
        <div class="teamgroundTop">
          <span>{{language.My_teammates}}</span>
          <span>{{language.SumOfHand}}</span>
          <span>{{language.My_Income}}</span>
        </div>
        <div class="teamItemWreaper">
         <template v-if="v.nickname" v-for="v in getPromote.teamMateList">
           <div class="teamItem">
             <span>{{v.nickname}}</span>
             <span>{{v.buy_count}}</span>
             <span>{{v.total}}</span>
           </div>
         </template>
        </div>
      </div>
    </div>
</template>

<script>
  import comTop from '../../common/commentTop'
  export default {
    name: "top-up",
    components:{
      comTop
    },
    computed:{
      getPromote:function () {
        return this.$store.getters.getPromote;
      },
      language:function () {
        return this.$store.getters.getLanguage.My_promotion
      },
    },
    mounted:function () {
      if(this.getPromote){
        this.$store.dispatch('actionPromote');
      }
    }
  }
</script>

<style scoped>
  .teamgroundTop{
    margin-top: 1.5rem;
    font-size: 1rem;
  }
  .teamgroundTop span{
    display: inline-block;
    float: left;
    color: #fff;
  }
  .teamgroundTop span:nth-child(1){
    margin-left: 1.142rem;
    margin-right: 5.071rem;
  }
  .teamgroundTop span:nth-child(2){
    margin-right: 3.7rem;
  }
  .teamgroundTop:after{
    content:"."; display:block; height:0; visibility:hidden; clear:both;
  }
  .teamItem{
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    box-sizing: border-box;
    padding-left: 1.185rem;
    color: #fff;
  }
  .teamItem span{
    display: inline-block;
    float: left;
    text-align: left;
    font-size: 0.928rem;
  }
  .teamItem span:nth-child(1){
    margin-right:4rem ;
    width: 5rem;
    text-align: center;
  }
  .teamItem span:nth-child(2){
    margin-right:5.5rem ;
    width: 5rem;
    text-align: center;
  }
  .teamItemWreaper  .teamItem:last-child{
    border: none;
  }
</style>
