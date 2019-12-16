/**
 * @file
 * 路由表
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const Example = () =>
  import(/* webpackChunkName: "Example" */ '@/views/About.vue');
const Add = () => import(/* webpackChunkName: "Add" */ '@/views/Add.vue');
const Report = () =>
  import(/* webpackChunkName: "Report" */ '@/views/Report.vue');
const Unlock = () =>
  import(/* webpackChunkName: "Unlock" */ '@/views/Unlock.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/add',
    name: 'add',
    component: Add, // 添加报告
  },
  {
    path: '/report/:id',
    name: 'report',
    component: Report, // 报告详情
  },
  {
    path: '/unlock/:id',
    name: 'unlock',
    component: Unlock, // 解锁引导页
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
