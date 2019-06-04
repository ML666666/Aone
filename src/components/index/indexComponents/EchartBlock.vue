<template>
  <div>
    <div class="CanvasContainer">
      <div class="CanvasMask">
      	<mt-spinner color="RGBA(26, 121, 255, 1)" :size="size" type="triple-bounce"></mt-spinner>
      </div>
      <div id="Canvas" ref="myEchart">
      </div>
      <span class="spiltLine"></span>
      <span class="time_0">1<b>s</b></span>
      <span class="time_1">30<b>s</b></span>
      <span class="time_2">90<b>s</b></span>
    </div>
  </div>
</template>

<script>
  import ErrorTips from "../../../store/ErrorTips"
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  require('echarts/lib/component/tooltip');
  var base = +new Date(2014, 9, 3);
  var oneDay = 24 * 3600 * 1000;
  var date = [];

  var data = [];
  var now = new Date(base);

  for (var i = 1; i <=90; i++) {
    date.push(i+'s');
  }
  export default {
    name: "echart-block",
    beforeCreate:function () {
    },
    mounted:function () {

    },
     methods:{
      panStart:function () {
      },
      panEnd:function () {
      }
    },
      watch:{
        Echartdata:function(val,oldval){
          if(this.isFrist){
            this.option.series[0].data = val.toString().split(",");
            let dom =  document.getElementById('Canvas');
            this.myChart = echarts.init(dom);
            this.myChart.setOption(this.option);
            this.isFrist = false;
            this.myChart.setOption({
              series: [{
                data: val.toString().split(",")
              },
              ]
            });
          }else{
            this.$store.dispatch('actionTransactionList');
            this.myChart.setOption({
              series: [{
                data: val.toString().split(",")
              },
              ]
            });
          }
        }
      },
      data:function () {
          return{
            size:60,
            isFrist:true,
            isFrist_2:true,
            time:1,
            myChart:[],
            option:{
              animation:'true',
              backgroundColor:"#000",
              grid:{
                width:'85%',
                height:'88%',
                top:'2%',
                left:'13%'
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#777'
                  },
                },
                backgroundColor: 'rgba(245, 245, 245, 0.8)',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                textStyle: {
                  align:'left',
                  color: '#000'
                },
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color:"RGBA(255, 255, 255, 0.1)",
                  }
                },
                axisLine:{
                  lineStyle:{
                    color:'RGBA(255, 255, 255, 1)'
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
                  show:true,
                  lineStyle:{
                    color:"RGBA(255, 255, 255, 0.1)",
                  }
                },
                axisLine:{
                  lineStyle:{
                    color:'RGBA(255, 255, 255, 1)'
                  }
                },
                axisLabel:{
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
                  name:'Price',
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
                    animation:'true',
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
                },
              ]
            }
         }
        },
      computed:{
        Echartdate:function (){
          return this.$store.getters.getEchartdate;
        },
        Echartdata:function () {
          return this.$store.getters.getEchartdata;
        },
        getGameTips:function () {
          return this.$store.getters.getGameTips;
        },
      },
  }
</script>

<style scoped>

  .CanvasContainer{
    position: relative;
  }
  .CanvasMask{
    padding-top: 6.5rem;
    position: absolute;
    width: 100%;
    height: 110%;
    top: 0px;
    left: 0px;
    z-index: 100;
    background: rgba(0, 0, 0, 1);
  }
  .CanvasContainer b{

  }
  .CanvasContainer .spiltLine{
  	background: RGBA(26, 121, 255, 0.5);
    height: 15.1rem;
    width: 1px;
    position: absolute;
    top: 0.3rem;
    left: 11.1rem;
  }
  .CanvasContainer .time_0{
    position: absolute;
    bottom: -0.8rem;
    left: 3.4rem;
    color: #fff;
    font-size: 0.85rem;
  }
  .CanvasContainer .time_1{
    position: absolute;
    bottom:  -0.8rem;
    left: 10.5rem;
    color: #fff;
    font-size: 0.85rem;
  }
  .CanvasContainer .time_2{
    position: absolute;
    bottom: -0.8rem;
    left: 25rem;
    color: #fff;
    font-size: 0.85rem;
  }
  #Canvas{
    width: 26.0714rem;
    height: 17.142rem;
    margin: 0 auto;
    margin-bottom: 1.42857rem;
  }
</style>
