import Vue from 'vue'
import Dashboard from '../../containers/Dashboard.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Dashboard),
}).$mount('#app')
