<template>
  <div id='chart'>
    <v-chart :options="options"  id='in-chart'/>
  </div>
</template>

<script>

export default {
  name:'LineData',
  props: {
    'chartData':{
        type: Array,
        default: null
    },
  },
  data(){
      return {
      }
  },
  mounted () {
  },
  computed:{
    options(){
      return {
        grid: {
          left:'30%',
          right:'30%'
        },
        xAxis:{
            id:'date',
            type: 'time',
            name: '日期',
            data:this.chartData.map(val=>{return val.date}).sort((d1,d2)=>{return new Date(d1) > new Date(d2)})
        },
        yAxis: {
            id:'trade_money',
            type: 'value',
            name: '交易额'
        },
        tooltip: {
          trigger: 'axis',
        },
        series: [{
            name:'总交易额',
            type: 'line',
            data: this.chartData.map(val=>{return [val.date,val.trade_money]}),
            smooth: true
        }]
      }
    }
  }
}
</script>

<style>
#in-chart{
  width:100%;
  height:600px;
}
</style>