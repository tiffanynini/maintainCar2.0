import Vue from 'vue'
import App from './App'
import pageUrl from './common.js'

Vue.config.productionTip = false
Vue.prototype.pageUrl = pageUrl

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
