import Vue from 'vue'
import App from './App.vue'

// 注册全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

// 引入MockServer.js的mock数据
import '@/mock/mockServe'
// 引入swiper的样式
import 'swiper/css/swiper.css'

// 引入路由
import router from '@/router'

// 引入仓库
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库
  store
}).$mount('#app')