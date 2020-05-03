import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router/index'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '../src/filters/localize.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import Paginate from 'vuejs-paginate'
import tooltipDirectives from '../src/directive/tooltip.directive'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.directive('tooltip', tooltipDirectives)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)


firebase.initializeApp({
  apiKey: "AIzaSyA869UycmEmRBi2hT4xZ8hXIiAGbQeYQ0Y",
  authDomain: "crm-vue-niga9l.firebaseapp.com",
  databaseURL: "https://crm-vue-niga9l.firebaseio.com",
  projectId: "crm-vue-niga9l",
  storageBucket: "crm-vue-niga9l.appspot.com",
  messagingSenderId: "872320063041",
  appId: "1:872320063041:web:f135eccd3c6df6929b58c0",
  measurementId: "G-30WRZH2YX2"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
