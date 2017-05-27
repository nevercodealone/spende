import Vue from 'vue';
import VueFormGenerator from 'vue-form-generator';
import App from './App';
import store from './store';

Vue.use(VueFormGenerator);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
