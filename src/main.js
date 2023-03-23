import * as Vue from 'vue';
import './sass/app.scss';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index';
import Router from "@/router";


const app = Vue.createApp(App);

app.use(Router);
app.use(VueAxios, axios);
app.use(store);

app.mount('#app');
