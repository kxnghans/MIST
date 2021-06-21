//impport modules
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'
import VueCarousel from "vue-carousel"
import ScrollAnimation from "./assets/styles/scrollanimation.js"

//fontawesome import and setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faEnvelopeOpenText, faEnvelope, faGlobeAmericas, faSitemap, faHandshake, faAngleDoubleDown, faAngleDoubleUp, faSun, faMoon, faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add( faUser, faEnvelopeOpenText, faEnvelope, faGlobeAmericas, faSitemap, faHandshake, faAngleDoubleDown, faAngleDoubleUp, faSun, faMoon, faQuoteRight, faQuoteLeft )
Vue.component('font-awesome-icon', FontAwesomeIcon)

//bulma setup
require("./assets/styles/main.scss")
//carousel setup
Vue.use(VueCarousel);
//scroll animation setup
Vue.directive("scrollanimation", ScrollAnimation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
