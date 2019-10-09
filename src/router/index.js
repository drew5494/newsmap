import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
//import PageView from '../pages/PageView';
//import OtherMap from '../pages/OtherMap';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    // {
    //   path: '/pageview',
    //   name: 'Page View',
    //   component: PageView
    // },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
});