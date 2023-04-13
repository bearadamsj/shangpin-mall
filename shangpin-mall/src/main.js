import Vue from 'vue'
import App from './App.vue'
import store from './store'
// register global components
import typeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
Vue.component(typeNav.name, typeNav)
Vue.component(Carousel.name, Carousel)
Vue.config.productionTip = false
import  "@/mock/mockServe"
import "swiper/css/swiper.css"
import router from '@/Router'

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  store,
}).$mount('#app')
