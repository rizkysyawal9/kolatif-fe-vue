import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNAi1ZpYhfTTqD998ASLjQdexb6I9enkI',
  authDomain: 'kolatif-be.firebaseapp.com',
  projectId: 'kolatif-be',
  storageBucket: 'kolatif-be.appspot.com',
  messagingSenderId: '970460220295',
  appId: '1:970460220295:web:afbc230fa8af23f1b6e122',
  measurementId: 'G-33SDN4CY3M',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
let app

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount('#app')
  }
})
