// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueLazyload, {
  loading: './../static/loading.gif'
})


const store = new Vuex.Store({
  state: {
    nickName: ''
  },
  mutations: {
    updateUserInfo(state, nickName) {
      state.nickName = nickName
    }
  }

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})