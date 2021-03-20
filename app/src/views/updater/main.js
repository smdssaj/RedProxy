import Vue from 'vue'
import Updater from '../../containers/Updater.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Updater),
}).$mount('#app')
