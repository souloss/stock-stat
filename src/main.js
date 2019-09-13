import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ECharts from "vue-echarts"; // 在 webpack 环境下指向 components/ECharts.vue
// 手动引入 ECharts 各模块来减小打包体积
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";

// 注册组件后即可使用
Vue.component("v-chart", ECharts);

var apicode = "d7ecb749062b47fb92eecb2a22e829ef";

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = "APPCODE " + apicode;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

Vue.use(VueAxios, axios);
Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount("#app");
