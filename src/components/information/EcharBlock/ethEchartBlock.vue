<template>
  <div>
    <div class="infoCanvasContainer">
      <div id="Canvas_2" ref="myEchart">
      </div>
    </div>
  </div>

</template>

<script>
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  var date = [];
  var data = [];

  let ws = null;
  for (var i = 1; i <=40; i++) {
    date.push(i+'s');
  }
  export default {
       name: "echart-block",
       beforeCreate:function () {
          //this.$store.dispatch('actionGetGameStatus');
        },
       methods:{
       },
       mounted () {
         var _this = this;
         ws = new WebSocket('wss://t9.senhet.com:8890');
         ws.onopen = () => {
           ws.send("last_data HTethcny")
         }
         ws.onmessage = evt => {
           _this.chartdata = JSON.parse(evt.data);
         }
         ws.onclose = function () {
         }
       },
       beforeDestroy:function () {
          ws.close();
       },
      watch:{
        chartdata:function (val,oldval) {
          if(val && oldval){
          if(val.length){
            for(var i = 461; i< val.length; i++){
              this.tChartdata.push(val[i])
            }
            this.option.series.data =  this.tChartdata
            let dom =  document.getElementById('Canvas_2');
            this.myChart = echarts.init(dom);
            this.myChart.setOption(this.option);
            this.myChart.setOption({
              series: [{
                data: this.tChartdata
              }]
            });
          }else{
            if(val.msg.symbol == "HTethcny"){

                this.tChartdata.shift()
                this.tChartdata.push(val.msg.curprice);
                this.myChart.setOption({
                  series: [{
                    data: this.tChartdata
                  }]
                });
            }
          }
          }
        },
        Echartdata:function(val,oldval){
          if(this.isFrist){

          }else{

          }
        }
      },
      data:function () {
          return{
            tChartdata:[],
            chartdata:[],
            size:60,
            isFrist:true,
            time:1,
            myChart:[],
            option:{
              backgroundColor:"#000",
              grid:{
                width:'100%',
                height:'100%',
                top:'',
                left:'0%'
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
                splitLine:{
                  show:false,
                  lineStyle:{
                    color:"RGBA(255, 255, 255, 1)",
                  }
                },
                axisLine:{
                  lineStyle:{
                    color:'RGBA(255, 255, 255, 0)'
                  }
                },
                axisLabel:{
                  show:false,
                  color:'#fff'
                }
              },
              yAxis: {
                boundaryGap: [0, '50%'],
                type: 'value',
                splitLine:{
                  show:false,
                  lineStyle:{
                    color:"RGBA(255, 255, 255, 1)",
                  }
                },
                axisLine:{
                  lineStyle:{
                    show:false,
                    color:'RGBA(255, 255, 255, 0)'
                  }
                },
                axisLabel:{
                  show:false,
                  color:'#fff'
                },
                max: function(value) {
                  return (value.max * 1.001).toFixed(0);
                },
                min: function(value) {
                  return (value.min * 0.999).toFixed(0);
                }
              },
              series: [
                {
                  name:'成交',
                  type:'line',
                  smooth:true,
                  symbol: 'none',
                  stack: 'a',
                  itemStyle: {
                    normal: {
                      color:'RGBA(26, 119, 248, 1)'
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                          offset: 0, color: 'RGBA(28, 67, 122, 1)' // 0% 处的颜色
                        }, {
                          offset: 1, color: 'RGBA(28, 45, 69, 1)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                      }
                    }
                  },
                  data:null
                }
              ]
            }
         }
        },
      computed:{
        Echartdate:function () {
          return this.$store.getters.getEchartdate;
        },
        Echartdata:function () {
          return this.$store.getters.getEchartdata;
        }
      }
  }
</script>

<style scoped>

  .infoCanvasContainer{
    position: relative;
  }
  .infoCanvasContainer .CanvasMask{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 100;
    background: rgba(0, 0, 0, 1);
  }
  .infoCanvasContainer #Canvas_2{
    width: 6.357rem;
    height: 2.285rem;
    margin: 0 auto;
  }
</style>
