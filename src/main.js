import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import vMediaQuery from 'v-media-query'
import LightBootstrap from './light-bootstrap-main'
import globalMixins from './globalMixins'
import { store } from './store/index'
import routes from './routes/routes'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import VueLoading from 'vuex-loading'
import VModal from 'vue-js-modal'

/* user plugins */
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(vMediaQuery)
Vue.use(Vuelidate)
Vue.use(VueLoading)
Vue.use(VModal)

/* user mixins */
Vue.mixin(globalMixins)

// configure router
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vueLoading: new VueLoading({ useVuex: true, moduleName: 'loading', registerComponents: true }),
  render: h => h(App)
})

/* We import element-ui variables at the end so they can override the default element-ui colors */
import './assets/sass/element_variables.scss'
import './assets/css/standard_theme.css'
import './assets/css/color.css'
import './assets/css/fontStyle.css'
import './assets/css/common.css'
import './assets/css/animation.css'
import 'element-ui/lib/theme-chalk/index.css'
