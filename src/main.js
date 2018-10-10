// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/my-mint.css'// 全局修改mint-UI样式
import './assets/css/common.css'
import './assets/icon/iconfont.css'
import { ScrollNavBar } from 'cube-ui'

Vue.use(MintUI)
Vue.use(ScrollNavBar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
