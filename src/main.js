import { createApp } from 'vue'
import App from './App.vue'
import AppDois from './AppDois.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import {BootstrapVue3, IconsPlugin} from 'bootstrap-vue-3';

const app = createApp(App)
const appDois = createApp(AppDois)
app.use(BootstrapVue3)
app.use(IconsPlugin)

app.mount('#app')
appDois.mount('#app2')





