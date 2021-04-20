import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import store from './_store/store';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#F5F6F8',
        secondary: 'black',
      },
      dark: {
        primary: '#131822',
        secondary: '#FFFFFF',
      },
    },
  },
});

Vue.use(Vuetify);

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
