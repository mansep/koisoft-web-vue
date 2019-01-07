//Vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Components
import 'bootstrap'
import * as VueGoogleMaps from 'vue2-google-maps'
import settings from "./settings"
import VModal from 'vue-js-modal'

Vue.use(VModal, { dialog: true });
Vue.use(VueGoogleMaps, {
  load: {
    key: settings.gmap.key_api,
    libraries: 'places',
  },
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = settings.title + ' - ' + to.name
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
