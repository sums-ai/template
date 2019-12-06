/**
 * @file
 * 路由表
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const Example = () => import(/* webpackChunkName: "Example" */ '../views/About.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/add',
    name: 'add',
    component: Example, // 添加报告
  },
  {
    path: '/reports',
    name: 'reports',
    component: Example, // 报告列表
  },
  {
    path: '/delete',
    name: 'delete',
    component: Example, // 删除报告
  },
];

const router = new VueRouter({
  mode: 'history',
  base: `/${process.env.VUE_APP_BASE}`,
  routes,
});

export default router;
