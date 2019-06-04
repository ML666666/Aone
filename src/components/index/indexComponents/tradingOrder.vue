<template>
    <div>


      <div class="choiceGroundWrapper">
        <div class="choiceItemGround">
          <div class="choiceCol">
            <div class="hasHand choiceItem"  v-bind:class="{'active':hand == 2}">2{{language.hand}}</div>
            <div class="hasHand choiceItem"  v-bind:class="{'active':hand == 20}">20{{language.hand}}</div>
          </div>
          <div class="choiceCol">
            <div class="hasHand choiceItem"  v-bind:class="{'active':hand == 50}">50{{language.hand}}</div>
            <input v-model="CustomizeHand" v-bind:class="{'active':hand >= 52}"  @change="onValuesChange"  type="text" :placeholder="language.Customize" class="choiceItem">
            </input>
          </div>
        </div>

        <div class="choiceButtonGround">
          <div style=" margin-right: 1.6rem;" class="waveWrapper"  v-bind:class="[winningPercent.down>winningPercent.up ? 'waveWrapperActiveClass' : '']">
            <div @click="MakeSureShow(1)" class="wave waveUp">
              <!--<div  v-bind:class="[winningPercent.down>winningPercent.up ? 'waveWrapperActiveClass' : '']" class="waveCont" :style="{top: 40-winningPercent.up+'%'}"></div>-->
              <!--<div  v-bind:class="[winningPercent.down>winningPercent.up ? 'waveWrapperActiveClass' : '']" class="waveCont_2"  :style="{top:40-winningPercent.up+'%'}"></div>-->
              <!--<div  v-show="winningPercent.up>25" :style="{marginTop: 90-winningPercent.up/2+'%'}">{{winningPercent.up}}%</div>-->
              <!--<img class="waveImg" src="../../assets/info/UpBtn.png"/>-->
              <span class="waveFont">{{winningPercent.up}}%</span>
            </div>
          </div>

          <div style="margin-right: 1.78rem;" class="waveWrapper" v-bind:class="[winningPercent.down<winningPercent.up ? 'waveWrapperActiveClass' : '']">
            <div @click="MakeSureShow(0)" class="wave waveDown">
              <!--<div v-bind:class="[winningPercent.down<winningPercent.up ? 'waveWrapperActiveClass' : '']" class="waveCont" :style="{top: 40-winningPercent.down+'%'}"></div>-->
              <!--<div v-bind:class="[winningPercent.down<winningPercent.up ? 'waveWrapperActiveClass' : '']" class="waveCont_2" :style="{top: 40-winningPercent.down+'%'}"></div>-->
              <!--<div v-show="winningPercent.down>25" :style="{marginTop: 90-winningPercent.down/2+'%'}">{{winningPercent.down}}%</div>-->
              <!--<img class="waveImg" src="../../assets/info/DownBtn.png"/>-->
              <span class="waveFont">{{winningPercent.down}}%</span>
            </div>
          </div>
        </div>

      </div>

      <div class="tradingMask tradingMask_1">
        <div class="MakeSureTrading animated bounceIn">
          <div class="MakeSureTradingTop">
            {{language.Confirm_transaction}}
            <img @click="MakeSureHide()" src="../../assets/commentImg/closeIcon.png" />
          </div>
          <div class="MakeSureTradingTopBody">
            <template v-if="isUp">
              <p>{{language.Buy_and_sell}}:&nbsp <span style="color: RGBA(254, 123, 131, 1)">{{language.Buy}}</span></p>
            </template>
            <template v-else>
              <p>{{language.Buy_and_sell}}:&nbsp <span style="color: #519175">{{language.Sell}}</span></p>
            </template>
            <p>{{language.Number_of_hands}}:&nbsp{{hand}}{{language.hand}}</p>
            <p>{{language.Currency_amount}}: &nbsp{{SumOfUsdt}} USDT</p>
          </div>
          <template v-if="isUp">
            <div @click="MakeSureHide(1)" class="MakeSureTradingButtom">
              {{language.Confirm_buy}}
            </div>
          </template>
          <template v-else>
            <div @click="MakeSureHide(2)" class="MakeSureTradingButtom">
              {{language.Confirm_sell}}
            </div>
          </template>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "trading-order",

    }
</script>

<style scoped>

</style>
