import Vue from 'vue'
import App from './App.vue'
import x5GMaps from 'x5-gmaps'

Vue.config.productionTip = false
Vue.use(x5GMaps, 'AIzaSyDy3qAZC4cLE5kGGJ_QNkenpi5cbDXHvng' )

new Vue({
  render: h => h(App),
}).$mount('#app')
