import { createApp } from 'vue';
import App from './App.vue';
import { createWebHistory, createRouter } from 'vue-router';
import IdealBody from './components/pages/IdealBody.vue';
import HomePage from './components/pages/HomePage.vue';
import oxygenation from './components/pages/oxygenation.vue';
import conservate from './components/pages/Conservate.vue';
import support from './components/pages/Support.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = [
  { path: '/', component: HomePage },
  { path: '/ventilatioon-parameters', component: IdealBody },
  { path: '/oxygenation-measurements', component: oxygenation },
  { path: '/conservative-therapy', component: conservate },
  { path: '/support', component: support },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
