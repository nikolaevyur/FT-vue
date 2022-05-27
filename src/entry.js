import App from './App.vue'

// import Api from '@/api'

import router from '@/router'

// Vue.use(Api)

// Register local assets & components globally
require('@/utils/register-assets')
require('@/utils/register-components')

new Vue({
    el: '.vue-app',
    router: router(),
    render: h => h(App),
  })