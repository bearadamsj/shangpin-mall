import Vue from 'vue'
import App from './App.vue'
import store from './store'
// register global components
import typeNav from '@/components/TypeNav'
Vue.component(typeNav.name, typeNav)
Vue.config.productionTip = false
import router from '@/Router'
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
