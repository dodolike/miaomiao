import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import store from './store'
import axios from "axios"

Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.filter('setWt',(url,news)=>{
return url.replace('/w\.h/',news)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
