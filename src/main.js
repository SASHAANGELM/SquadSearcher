import Vue from 'vue';
import Vuesax from 'vuesax';
import moment from 'moment';

import '@fortawesome/fontawesome-free/css/all.css';
import 'vuesax/dist/vuesax.css'; // Vuesax styles

import './registerServiceWorker';
import './utils/config';
import router from './router';
import store from './store/store';
import App from './App.vue';

import Icon from './components/Icon';

// Import Tailwind and custom CSS.
import './assets/css/main.scss';

Vue.use(Vuesax, {
  primary: '#4299e1',
  success: '#48bb78',
  danger: '#f56565',
  warning: '#ed8936'
});

Vue.component('Icon', Icon);

Vue.config.productionTip = false;

if (!window.location.protocol.includes('https')) {
  const hostname = window.location.hostname;
  const ipRegExp = /([0-9]{1,3}\.){3,3}[0-9]{1,3}/g;
  if (!hostname.includes('localhost') && !ipRegExp.test(hostname)) {
    window.location.protocol = 'https:';
  }
}

window.moment = moment;
Vue.prototype.moment = moment;

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

export default app;
