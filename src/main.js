import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import Loader from "./components/app/Loader";
import currencyFielter from "./filters/currency.filter";
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency' , currencyFielter)
Vue.component('Loader',Loader)

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
