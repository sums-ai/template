/**
 * @file
 * 路由表
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const Add = () => import(/* webpackChunkName: "Add" */ '@/views/Add.vue');
const Report = () =>
  import(/* webpackChunkName: "Report" */ '@/views/Report.vue');
const Reports = () =>
  import(/* webpackChunkName: "Reports" */ '@/views/Reports.vue');
const Unlock = () =>
  import(/* webpackChunkName: "Unlock" */ '@/views/Unlock.vue');
const Delete = () =>
  import(/* webpackChunkName: "Delete" */ '@/views/Delete.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    component: Add // 添加报告
  },
  {
    path: '/report/:id',
    name: 'Report',
    component: Report // 报告详情
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports // 报告列表
  },
  {
    path: '/unlock/:id',
    name: 'Unlock',
    component: Unlock // 解锁引导页
  },
  {
    path: '/delete',
    name: 'Delete',
    component: Delete // 删除报告
  }
];

const router = new VueRouter({
  mode: 'history',
  base: `/${process.env.VUE_APP_BASE}`,
  routes
});

export default router;
