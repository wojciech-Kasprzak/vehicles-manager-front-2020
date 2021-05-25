// import Vue from 'vue'
import axios from 'axios'

// Vue.prototype.$axios = axios

export default ({ Vue }) => {
  axios.defaults.baseURL = 'https://paradiso-dev.xaa.pl'
  // axios.defaults.baseURL = 'http://localhost:3000'
  Vue.prototype.$axios = axios
}
