import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify'

import shared from 'syncobox-shared'
import 'syncobox-shared/dist/syncobox-shared.css'

import clash from 'syncobox-clash'
import 'syncobox-clash/dist/syncobox-clash.css'

Vue.config.productionTip = false
// const apiConfig = {
//   identityBaseUrl: process.env.VUE_APP_IDENTITY_BASE_URL,
//   redirectBaseUrl: process.env.VUE_APP_REDIRECT_BASE_URL,
//   mainBaseUrl: process.env.VUE_APP_MAIN_BASE_URL,
//   bimBaseUrl: process.env.VUE_APP_BIM_BASE_URL,
//   flowBaseUrl : process.env.VUE_APP_FLOW_BASE_URL,
//   token: localStorage.getItem('oidc_access_token')
// }
Vue.use(shared, { store, router })
Vue.use(clash)

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
