<template>
<div id=main>
<span>

开始时间:{{begin}}  
结束时间:{{end}}
股票编码:
<input v-model="code" />
<button @click="get_data">刷新数据</button>
</span>
<LineData v-if=loaded :chartData='data'></LineData>
</div>
</template>

<script>
import LineData from './LineData'

export default {
  name: "AppMain",
  components:{
    LineData
  },
  data:function(){
    return {
      loaded:false,
    }
  },
  methods:{
    get_data(){
      this.loaded = false
      this.$http.get('http://stock.market.alicloudapi.com/sz-sh-stock-history',{
        params:{
          begin:this.begin,
          code:this.code,
          end:this.end
        }
      }).then((response) => {
        console.log(response.data)
        this.data=response.data.showapi_res_body.list
        this.loaded = true
      })
    }
  },
  computed:{
    begin(){
      let now = new Date()
      return now.getFullYear() + "-" +((now.getMonth()+1)<10?"0":"")+(now.getMonth())+"-"+(now.getDate()<10?"0":"")+now.getDate();
    },
    end(){
      let now = new Date()
      return now.getFullYear() + "-" +((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+"-"+(now.getDate()<10?"0":"")+now.getDate();
    }
  }
};
</script>