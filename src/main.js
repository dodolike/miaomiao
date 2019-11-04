import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import store from './stores'
import axios from "axios"
import loading from './loading'
import scroll from "@/components/betterscroll"
import swipper from "@/components/swipper"
Vue.prototype.axios=axios
Vue.component('load',loading)
Vue.component('scroll',scroll)
Vue.component('swipper',swipper)
Vue.config.productionTip = false
Vue.filter('setWt',(url,news)=>{
return url.replace('/w\.h/',news)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
