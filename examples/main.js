import Vue from 'vue'
import App from './App.vue'
import CountFlip from '../packages'

Vue.use(CountFlip)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
