import Vue from 'vue'
import App from './App.vue'

// register global components
import typeNav from '@/Pages/Home/TypeNav'
Vue.component(typeNav.name, typeNav)
Vue.config.productionTip = false
import router from '@/Router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
