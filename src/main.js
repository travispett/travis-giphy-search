import Vue from 'vue';
import App from './App';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

Vue.config.productionTip = false;

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
