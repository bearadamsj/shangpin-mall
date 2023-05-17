import Vue from 'vue'
import App from './App.vue'
import store from './store'
// register global components
import typeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

//import element from element-ui
import {Button, MessageBox} from 'element-ui'
//import lazyload-vue
import VueLazyload from 'vue-lazyload'
//import veeValidate
import '@/plugins/veeValidate'

Vue.component(typeNav.name, typeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.use(Button)
import lbxx from '@/assets/images/1.gif'
Vue.use(VueLazyload, {
  loading: lbxx
});



Vue.config.productionTip = false
import  "@/mock/mockServe"
import "swiper/css/swiper.css"
import router from '@/Router'
import * as API from '@/API'

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store,
}).$mount('#app')
