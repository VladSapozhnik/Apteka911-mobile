import * as Vue from 'vue';
import './sass/app.scss';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index';

const app = Vue.createApp(App);

app.use(VueAxios, axios);
app.use(store);

app.mount('#app')
