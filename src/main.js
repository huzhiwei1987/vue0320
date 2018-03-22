// 入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import moment from 'moment'
Vue.filter('dateFormat',function(dataStr, pattern='YYYY-MM-DD HH:mm:ss'){
 return moment(dataStr).format(pattern)
})

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'http://vue.studyit.io'
Vue.http.options.emulateJSON = true

// import {Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


import router from './router.js'

import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})