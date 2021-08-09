import Vue from 'vue'
import Vant from 'vant';
import 'lib-flexible/flexible'
import router from './router/index'
import { VueAxios } from './utils/request'
import 'vant/lib/index.css';
import '@/styles/reset.less';
import '@/styles/common.less';
import App from './App.vue'

Vue.use(Vant);

Vue.config.productionTip = false
// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
