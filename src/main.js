import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
Vue.config.productionTip = false

const axiosJSON = axios.create({
  baseURL: 'http://localhost:8081/',
  timeout: 2000,
  headers: {'X-Custom-Header': 'foobar'}
});

const axiosUpload = axios.create({
  baseURL: 'http://localhost:8081/',
  timeout: 3000,
  headers: {'Content-Type': 'multipart/form-data'}
});

Vue.prototype.axiosJSON = axiosJSON;
Vue.prototype.axiosUpload = axiosUpload;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
