import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.component("alert", require("./components/Alert").default);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
