<template>
    <div  style="padding-top: 3.1428rem;" v-if="Edata" class="typeDetailWrapper">
      <comTop v-if="type">{{type.toUpperCase()+'行情'}}</comTop>
      <div class="typeDetail">
          <div class="typeDetailContainer">
            <template v-if="type == 'BTC'">
              <img src="../../assets/members/BTC.png" />
              <p>{{language.BTC}}</p>
            </template>
            <template  v-else-if="type == 'ETH'">
              <img src="../../assets/members/ETH.png" />
              <p>{{language.ETH}}</p>
            </template>
            <template  v-else="type == 'LTC'">
              <img src="../../assets/members/LTC.png" />
              <p>{{language.LTC}}</p>
            </template>
              <p>{{language.currency}}</p>
              <span style="font-size: 1rem">¥{{curData}} CNY</span>
            <span v-show="isUpPercentage>=0"
                  style="top: 1.4rem;
                      color: rgb(243, 87, 106);
                      right: -6.6rem;">+{{isUpPercentage}}%({{language.today}})</span>
            <span v-show="isUpPercentage<0"
                   style="top: 1.4rem;
                color: RGBA(51, 145, 109, 1);
                right: -6.6rem;">{{isUpPercentage}}%({{language.today}})</span>
          </div>
      </div>
      <div class="infoAd">
        <p>
          <span>{{language.the_highest}} ¥{{High}}</span>
          <span style="border-right: 1px solid #fff;
                     margin: 0 0.65rem 0 0.5rem;
                     height: 0.57rem;
                     display: inline-block;"></span>
          <span>{{language.the_lowest}} ¥{{Low}}</span>
        </p>
        <p>
          {{language.turnover}}（24h) {{Amount}}&nbsp{{language.ten_thousand}}
          <!--，368.24{{language.Hundred_million}}CNY-->
        </p>
      </div>
      <div class="infoChartWrapper">
        <infoDetailChartBlock_K :type="type"></infoDetailChartBlock_K>
      </div>
      <div class="infoAbout">
        <div class="infoAboutTop">
          <div @click="TapIndex=0"  v-bind:class="[TapIndex == 0 ? 'active' : '']" class="infoAboutTopItem">
            <p>
              {{language.market}}
              <i>{{language.market}}</i>
              <span></span>
            </p>
          </div>
          <div @click="TapIndex=1"  v-bind:class="[TapIndex == 1 ?  'active' : '']"  class="infoAboutTopItem">
            <p>
              {{language.introduction}}
              <i>{{language.introduction}}</i>
              <span></span>
            </p>
          </div>
          <div @click="TapIndex=2"  v-bind:class="[TapIndex == 2 ?  'active' : '']"  class="infoAboutTopItem">
            <p>
              {{language.information}}
              <i> {{language.information}}</i>
              <span></span>
            </p>
          </div>
        </div>
        <div class="infoAboutWrapper">
          <info :type_1="1"  v-if="TapIndex == 0"></info>
          <market :type_1="type" v-else-if="TapIndex == 1"></market>
          <project :type_1="1" v-else></project>
        </div>
      </div>
    </div>
</template>

<script>
    import infoDetailChartBlock_C from './EcharBlock/infoDetailChartBlock_C'
    import infoDetailChartBlock_K from './EcharBlock/infoDetailChartBlock_K'
    import comTop from '../common/commentTop'
    import info from './infoAboutItem/information_2'
    import market from './infoAboutItem/market_2'
    import project from './infoAboutItem/ProjectIntroduction'

    let ws = null;
    export default {
        name: "info-detail",
        props:["type_1"],
        components:{
         comTop,
          infoDetailChartBlock_C,
          infoDetailChartBlock_K,
          info,
          market,
          project,
        },
        mounted:function () {
          $('.changeItem').click(function () {
            $('.changeItem').removeClass('active');
            $(this).addClass('active');
          });

          this.type = this.$route.query.id;
          var _this = this;
          ws = new WebSocket('wss://t9.senhet.com:8890');
          var status = "last_data HT"+this.type.toLowerCase()+"cny"
          ws.onopen = () => {
            ws.send(status);
          }
          ws.onmessage = evt => {
            var curType = "HT"+this.type.toLowerCase()+"cny";
            if(JSON.parse(evt.data).msg){
              if(curType == JSON.parse(evt.data).msg.symbol) {
                this.Edata = JSON.parse(evt.data);
              }
            }
          }
          ws.onclose = function () {
          }
        },
        beforeDestroy:function () {
          ws.close();
        },
        watch:{
          Edata:function (val,oldval) {
            if(val && oldval){
              if(val.msg.PriceChangeRatio){
              this.curData = val.msg.curprice;
              this.isUpPercentage = val.msg.PriceChangeRatio.toString().substring(0,(val.msg.PriceChangeRatio.toString().indexOf('.'))+3);
              this.High = val.msg.High;
              this.Low = val.msg.Low;
              this.Amount = (val.msg.Amount/10000).toFixed(2);
              }
            }else{
              if(val && oldval){
                this.curData = val.msg.curprice;
                this.isUpPercentage = val.msg.PriceChangeRatio.toString().substring(0,(val.msg.PriceChangeRatio.toString().indexOf('.'))+3);
                this.High = val.msg.High;
                this.Low = val.msg.Low;
                this.Amount = (val.msg.Amount/10000).toFixed(2);
              }
            }
          },
        },
        computed: {
          language:function () {
            return this.$store.getters.getLanguage.infoPageDetail;
          }
        },
        data:function () {
          return{
            TapIndex:0,
            isLineShow:true,
            type:null,
            Edata:null,
            curData:null,
            isUpPercentage:0.000000,
            High:0.00,
            Low:0.00,
            Amount:0.00
          }
        },
    }
</script>

<style scoped>
.typeDetailWrapper{
  padding-bottom: 4.5rem;
}
.typeDetail{
  color: #fff;
  height: 4.857rem;
  padding-top: 1.071rem;
  padding-bottom: 1.071rem;
  border-top: 1px solid rgba(151,151,151,0.2);
  border-bottom: 1px solid rgba(151,151,151,0.2);
}
.typeDetailContainer{
  width: 13.928rem;
  margin-left: 4.412rem;
  height: 100%;
  position: relative;
}
.typeDetailContainer img{
  width: 2.571rem;
  left: -3.5rem;
  position: absolute;
}
.typeDetailContainer p{
  text-align: left;
  font-size: 0.857rem;
  margin-bottom: 0.2rem;
}
.typeDetailContainer span{
  position: absolute;
  right: -7.6rem;
  top: 0px;
  font-size: 0.857rem;
}
.infoAd{
  padding-top:1.0714rem;
  padding-left:0.785rem;
  height: 5.428rem;
}
.infoAd p{
  text-align: left;
  font-size: 0.857rem;
  color: #fff;
}
.infoAd p:first-child{
  margin-bottom: 0.5rem;
}
.infoChartWrapper{
  height: 18.58571rem;
  position: relative;
}
.changeItemWrapper{
  width: 4.35rem;
  height: 1.714rem;
  position: absolute;
  left: 0.785rem;
  top:0.428rem;
}
.changeItemWrapper .active{
  background: RGBA(26, 121, 255, 1) !important;
}
.changeItemWrapper .changeItem{
  width: 2.125rem;
  height: 1.714rem;
  display: inline-block;
  float: left;
  background: RGBA(40, 40, 40, 1);
  padding-top: 0.3rem;
}
.changeItemWrapper .changeItem:first-child{
  border-top-left-radius: 33px;
  border-bottom-left-radius: 33px;
  padding-left: 0.2rem;
}
.changeItemWrapper .changeItem:last-child{
  border-top-right-radius: 33px;
  border-bottom-right-radius: 33px;
  padding-top: 0.4rem;
}
.changeItemWrapper img{
  width: 1.178rem;
  display: block;
  margin: 0 auto;
}
.infoAbout{
  color: #fff;
}
.infoAboutTop {
  height: 2.14rem;
}
.infoAboutTop .infoAboutTopItem{
  width: 33.33333%;
  height: 2.14rem;
  position: relative;
  display: inline-block;
  float: left;
  color: #fff;
  background:rgba(40,40,40,0.4);
}
.infoAboutTop .infoAboutTopItem p i{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  width: 100%;
  z-index: 80;
}
.infoAboutTop .infoAboutTopItem p{
  display: inline;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 1rem;
  color: transparent;
}
.infoAboutTop .active span{
    display: block !important;
}
.infoAboutTop .infoAboutTopItem p span{
  width: 115%;
  height: 0.3rem;
  background: RGBA(26, 121, 255,1);
  display: inline-block;
  position: absolute;
  left: 50%;
  top:0.9rem;
  -webkit-transform: skew(45deg);
  transform: skew(45deg) translateX(-50%);
  display: none;
}
</style>
