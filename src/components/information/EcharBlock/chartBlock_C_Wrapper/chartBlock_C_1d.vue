<template>
  <div id="ECanvas">

  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/candlestick');
  require('echarts/lib/chart/bar');
  let ws = null;
  export default {
    name: "chart-block_-c_1d",
    mounted:function () {
      var _this = this;
      ws = new WebSocket('ws://120.79.128.52:8890');
      ws.onopen = () => {
        var status = "search_kdata HT"+this.type.toLowerCase()+"cny d";
        ws.send(status);
      }
      ws.onmessage = evt => {
        if(JSON.parse(evt.data).length){
          for(var i = 0; i<JSON.parse(evt.data).length; i++){
            var t = [];
            var r = [];
            var obj = JSON.parse(evt.data)[i];
            console.log(obj);
            var s = obj.Date.substring(obj.Date.indexOf(" "));
            this.Cdata.unshift(s.substring(0,s.lastIndexOf(":")));
            t.push(obj.Open);
            t.push(obj.Close);
            t.push(obj.High);
            t.push(obj.Low);
            t.push(obj.Volume);
            r.push(i);
            r.push(obj.Volume);
            var isUp = obj.Open>obj.Close?1:-1;
            r.push(isUp);
            this.Tlist.unshift(t);
            this.volumes.unshift(r)
          }
        }
        this.list = this.Tlist;
      }
      ws.onclose = function () {
      }
    },
    watch:{
      list:function (val,oldval) {
        console.log(val.length);
        console.log(this.volumes.length);
        console.log(this.Cdata.length)
        if(val.length){
          this.option.series[0].data = val;
          this.option.series[1].data = this.volumes;
          this.option.xAxis[0].data = this.Cdata;
          this.option.xAxis[1].data = this.Cdata;
          let dom =  document.getElementById('ECanvas');
          this.myChart = echarts.init(dom);
          this.myChart.setOption(this.option);
        }
      }
    },
    data:function () {
      return{
        volumes:[],
        myChart:[],
        Cdata:[],
        list:[],
        Tlist:[],
        option:{
          backgroundColor: '#000',
          animation: true,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
              color: '#000'
            },
          },
          axisPointer: {
            link: {xAxisIndex: 'all'},
            label: {
              backgroundColor: '#777'
            }
          },
          grid: [
            {
              width:"80%",
              left: '6%',
              right: '8%',
              height: '90%',
              top:'-10%'
            },
            {
              width:"79.5%",
              left: '6%',
              right: '8%',
              top: '64%',
              height: '16%'
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: null,
              scale: true,
              boundaryGap : false,
              axisLine: {
                onZero: false,
                lineStyle:{
                  color:'RGBA(255, 255, 255, 0.5)'
                }
              },
              splitLine: {show: false},
              axisLabel:{
                color:'#fff',
                rotate:"45"
              },
              splitNumber: 20,
              min: 'dataMin',
              max: 'dataMax',
              axisPointer: {
                z: 100
              },
              lineStyle:{
                color:"RGBA(255, 255, 255, 0.5)",
              },
            },
            {
              type: 'category',
              gridIndex: 1,
              data: null,
              scale: true,
              boundaryGap : false,
              lineStyle:{
                color:"RGBA(255, 255, 255, 0.2)",
              },
              axisLine: {
                onZero: false,
                lineStyle:{
                  color:'RGBA(255, 255, 255, 0.5)'
                }
              },
              axisTick: {show: false},
              splitLine: {show: false},
              axisLabel: {show: false},
              splitNumber: 20,
              min: 'dataMin',
              max: 'dataMax'
            }
          ],
          yAxis: [
            {
              position:"right",
              axisLabel:{
                color:'#fff'
              },
              axisLine:{
                lineStyle:{
                  color:'RGBA(255, 255, 255, 0.5)'
                }
              },
              scale: true,
              splitArea: {
                show: false
              },
              splitLine:{
                lineStyle:{
                  color:'RGBA(255, 255, 255, 0.6)'
                }
              }
            },
            {
              scale: true,
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: {show: false},
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false}
            }
          ],
          series: [
            {
              name: 'Dow-Jones index',
              type: 'candlestick',
              data: null,
              itemStyle: {
                normal: {
                  color: "RGBA(246, 72, 67, 1)",
                  color0: "RGBA(92, 159, 52, 1)",
                  borderColor: null,
                  borderColor0: null
                }
              },
              tooltip: {
                formatter: function (param) {
                  param = param[0];
                  return [
                    'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                    'Open: ' + param.data[0] + '<br/>',
                    'Close: ' + param.data[1] + '<br/>',
                    'Lowest: ' + param.data[2] + '<br/>',
                    'Highest: ' + param.data[3] + '<br/>'
                  ].join('');
                }
              }
            },
            {
              name: 'Volume',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: null,
              itemStyle:{
                color:["RGBA(57, 63, 77, 1"]
              }
            }
          ]

        }
      }
    },
    beforeDestroy:function () {
      ws.close();
    },
    props: ['type'],
  }
</script>

<style scoped>
  #ECanvas{
    width: 100%;
    height: 100%;
  }
  #ECanvas >>>　div{
    position: absolute !important;
    overflow: auto !important;
    padding-top:1rem ;
  }
  #ECanvas div{
    position: absolute !important;
    overflow: auto !important;
  }
</style>
