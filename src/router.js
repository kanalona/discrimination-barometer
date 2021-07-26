import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

const Form = () => import('./pages/Form.vue');
const Values = () => import('./pages/Values.vue');
const Meaning = () => import('./pages/Meaning.vue');
const Binary = () => import('./pages/subpages/Binary.vue');
const UnpaidWork = () => import('./pages/subpages/UnpaidWork.vue');

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { left: 0, top: 0 }
    }
  },
  routes: [
    { path: '/', component: Home }, //for developing the form modul
    { path: '/barometer', component: Form },
    { path: '/berechnung', component: Values },
    {
      path: '/kontext', component: Meaning, children: [
        { path: '', redirect: '/kontext/zwei-geschlechter' }, // default child path
        { path: 'zwei-geschlechter', component: Binary },
        { path: 'betreuungspflichten', component: UnpaidWork }
      ]

    },
    { path: '/:notFound(.*)', component: NotFound }],

});

export default router;