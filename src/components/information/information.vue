<template>
  <div style="position: relative">


    <div v-if="!BTC" class="infoCanvasMask">
      <mt-spinner color="RGBA(26, 121, 255, 1)" :size="size" type="triple-bounce"></mt-spinner>
    </div>

    <comTop>{{language.Money_Marke}}</comTop>
    <div class="infoBlock">
      <div  class="infoTop">
        <router-link tag="span" :to="{name:'infoDetail',query:{ id : 'BTC'}}">
          <span v-if="BTC" class="infoTopItem">
              <p>{{language.BTC}}</p>
              <p  v-if="BTC.curprice">¥{{BTC.curprice}}</p>
              <btcEchartBlock></btcEchartBlock>
          </span>
        </router-link>
          <span class="spLine"></span>
        <router-link tag="span" :to="{name:'infoDetail',query:{ id : 'LTC'}}">
          <span v-if="LTC" class="infoTopItem">
              <p>{{language.LTC}}</p>
              <p  v-if="LTC.curprice">¥{{LTC.curprice}}</p>
              <ltcEchartBlock></ltcEchartBlock>
          </span>
        </router-link>
          <span class="spLine"></span>
        <router-link tag="span" :to="{name:'infoDetail',query:{ id : 'ETH'}}">
          <span v-if="ETH" class="infoTopItem">
              <p>{{language.ETH}}</p>
              <p  v-if="ETH.curprice" >¥{{ETH.curprice}}</p>
              <ethEchartBlock></ethEchartBlock>
          </span>
        </router-link>
      </div>


      <div class="infoList">
        <div class="infoListTop">
            <span class="infoListTopItem">
                {{language.Currency}}
            </span>
            <span class="infoListTopItem">
                {{language.Price}}
            </span>
            <span class="infoListTopItem">
               {{language.Up}}/{{language.Down}}
            </span>
        </div>
        <div class="infoListBlock">
          <router-link tag="span" :to="{name:'infoDetail',query:{ id : 'BTC'}}">
            <div class="infoListItemWrapper">
              <div v-if="BTC" class="infoListItem">
                <img src="../../assets/info/BTC.png" height="60" width="60"/><span style="font-size: 0.926rem">BTC</span>
                <span  v-if="BTC.curprice" class="price">¥{{BTC.curprice}}</span>
                <span v-bind:class="[BTC.PriceChangeRatio>0 ? 'up' : 'down']" class="isUp">
                <template v-if="BTC.PriceChangeRatio>0">+</template>{{BTC.PriceChangeRatio}}%
              </span>
              </div>
              <div v-if="BTC" class="about">{{language_2.turnover}}（24h) {{BTC.Amount | filterAmount}}{{language_2.ten_thousand}} BTC </div>
            </div>
          </router-link>
          <router-link tag="span" :to="{name:'infoDetail',query:{ id : 'ETH'}}">
            <div  class="infoListItemWrapper">
              <div  v-if="ETH" class="infoListItem">
                <img src="../../assets/info/ETH.png" height="60" width="60"/><span style="font-size: 0.926rem">ETH</span>
                <span  v-if="ETH.curprice" class="price">¥{{ETH.curprice}}</span>
                <span v-bind:class="[ETH.PriceChangeRatio>0 ? 'up' : 'down']" class="isUp">
                <template v-if="ETH.PriceChangeRatio>0">+</template>{{ETH.PriceChangeRatio}}%
              </span>
              </div>
              <div v-if="ETH" class="about">{{language_2.turnover}}（24h){{ETH.Amount | filterAmount}}{{language_2.ten_thousand}}  ETH </div>
            </div>
          </router-link>
          <router-link tag="span" :to="{name:'infoDetail',query:{ id : 'LTC'}}">
            <div  class="infoListItemWrapper">
              <div v-if="LTC" class="infoListItem">
                <img src="../../assets/info/LTC.png" height="60" width="60"/><span style="font-size: 0.926rem">LTC</span>
                <span  v-if="LTC.curprice" style="margin-left: 5rem;"  class="price">¥{{LTC.curprice}}</span>
                <span v-bind:class="[LTC.PriceChangeRatio>0 ? 'up' : 'down']"  class="isUp">
                <template v-if="LTC.PriceChangeRatio>0">+</template>{{LTC.PriceChangeRatio}}%
              </span>
              </div>
              <div v-if="LTC" class="about">{{language_2.turnover}}（24h) {{LTC.Amount | filterAmount}}{{language_2.ten_thousand}}  LTC </div>
            </div>
          </router-link>
        </div>
      </div>


      <p class="infoPageToEduTitle">知识在线</p>
      <div class="toEduPageLinkWrppper">
        <div class="toEduPageLinkItem">
          <router-link tag="span" :to="{ name:'eduAritcle'}">
            <img src="../../assets/info/toEduPage_2.png""/>
            文章·关于区块链
          </router-link>
        </div>
        <div  class="toEduPageLinkItem">
          <router-link tag="span"  :to="{ name:'eduVideo'}">
            <img src="../../assets/info/toEduPage_1.png"/>
            视频·区块链100问
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import btcEchartBlock from './EcharBlock/btcEchartBlock'
  import ethEchartBlock from './EcharBlock/ethEchartBlock'
  import ltcEchartBlock from './EcharBlock/ltcEchartBlock'
  import comTop from '../common/BlackCommentTop'
    export default {
        name: "information",
      components:{
        comTop,
        btcEchartBlock,
        ethEchartBlock,
        ltcEchartBlock
      },
      beforeCreate:function () {
        var obj = {
          status:"last_data HTbtccny",
          isClose:false
        }
        this.$store.dispatch('actiongetEchartData',obj);
        this.$store.dispatch('actionLastData');
      },
      mounted:function () {
        // setTimeout(function () {
        //   $('.infoCanvasMask').fadeOut();
        // },1000);
        $('.infoCanvasMask').height($(window).height());
      },
      data:function () {
          return{
            size:60,
          }
      },
      filters:{
        filterAmount:function (val) {
          return (val/10000).toFixed(2);
        }
      },
      computed:{
          BTC:function () {
            return this.$store.getters.getBTC
          },
          ETH:function () {
            return this.$store.getters.getETH
          },
          LTC:function () {
            return this.$store.getters.getLTC
          },
          language:function () {
            return this.$store.getters.getLanguage.infoPage;
          },
         language_2:function () {
           return this.$store.getters.getLanguage.infoPageDetail;
         }
      }
      //0.857rem 24px
      // 0.928rem 26px
      // 1.28rem 36px
      //2.5rem 70px
      //1.428rem 40px
      //0.78571rem 22px
    }
</script>

<style scoped>
  .toEduPageLinkWrppper{
    padding-left: 2.8571rem;
    padding-right: 2.8571rem;
    margin-bottom: 4rem;
  }
  .toEduPageLinkWrppper:after{
    display: block;
    height: 0px;
    clear: both;
    content: " ";
  }
  .toEduPageLinkWrppper .toEduPageLinkItem{
    width: 9.571rem;
    float: left;
  }
  .toEduPageLinkWrppper .toEduPageLinkItem img{
    width: 9.571rem;
    height: auto;
    margin-bottom:  0.928rem ;
  }
  .toEduPageLinkWrppper .toEduPageLinkItem:last-child{
    width: 9.571rem;
    float: right;
  }
  .infoPageToEduTitle{
    text-align: left;
    padding-left:1.428rem;
    margin-top:1.428rem;
    margin-bottom:1.28rem ;
    font-size: 1rem;
  }
  .infoBlock {
    width: 100%;
    color: #fff;
    position: relative;
  }
  .infoCanvasMask{
    position: absolute;
    top:0%;
    left: 0%;
    width: 100%;
    background: #000;
    z-index: 1000;
    padding-top: 15rem;
    box-sizing: border-box;
  }
  .infoList .infoListTop{
    height: 2.14rem;
    background: RGBA(40, 40, 40, 0.4);
  }
  .infoListItemWrapper{
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .infoListBlock span:last-child .infoListItemWrapper{
    border-bottom: 1px solid rgba(255,255,255,0);
  }
  .infoListBlock .infoListItem{
    height: 3.142rem;
    /*border-bottom:2px solid rgba(255,255,255,0.2);*/
    line-height: 3.142rem;
    text-align: left;
  }
  .infoListBlock  .about{
    text-align: left;
    padding-left: 2.571rem;
    margin-bottom: 0.857rem;
    font-size: 0.785rem;
  }
  .infoListBlock .infoListItem .price{
    font-size: 0.926rem;
    width: 7.8rem;
    display: inline-block;
    margin-left: 4.85rem;
    margin-right: 1rem;
  }
  .infoListBlock .infoListItem  .up{
    color: RGBA(254, 123, 131, 1);
  }
  .infoListBlock .infoListItem  .down{
    color:  RGBA(51, 145, 109, 1);
  }
  .infoListBlock .infoListItem img{
    width: 1.428rem;
    height: auto;
    margin-right: 0.428rem;
    margin-left: 2.571rem;
  }
  .infoListBlock .infoListItem:last-child{
    height: 3.142rem;
    border-bottom:2px solid rgba(255,255,255,0);
  }
  .infoList .infoListTopItem{
    display: inline-block;
    float: left;
    width: 33.333%;
    height: 2.14rem;
    line-height: 2.14rem;
  }
  .infoBlock .infoTop {
    width: 100%;
    height: 6.714rem;
    margin-top: 1.94rem;
    margin-bottom: 3.124rem;
  }
  .infoBlock .infoTop .infoTopItem{
    display: inline-block;
    float: left;
    height: 100%;
    width: 33%;
  }
  .infoBlock .infoTop .spLine{
    display: inline-block;
    float: left;
    height: 100%;
    width: 0.0714rem;
    background: rgba(255,255,255,0.2);
  }
  .infoBlock .infoTop .infoTopItem p{
    margin-bottom: 0.92rem;
  }
  .infoBlock .infoTop .infoTopItem img{
    width: 6.357rem;
    height: auto;
    display: block;
    margin: 0 auto;
  }
</style>
