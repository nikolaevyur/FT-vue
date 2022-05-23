import App from './App.vue'

// Register local assets & components globally
require('@/utils/register-assets')
require('@/utils/register-components')

new Vue({
    el: '#app',
    render: h => h(App),
  })