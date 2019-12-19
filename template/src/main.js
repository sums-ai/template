import { loading } from '@/components';
import '@/plugins';
import router from '@/router';
import apis from '@/services';
import store from '@/store';
import {
  checkENV,
  genShareInfo,
  getStorage,
  goHome,
  track,
  updateStorage,
} from '@/utils';
import 'minireset.css';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// 全局挂载 loading
// 使用方法见 src/components/Loading/README
Vue.prototype.$loading = loading;

// 统计事件上报
Vue.prototype.$track = track;

const el = `#${process.env.VUE_APP_ROOT}`;

let instance = null;

// 子项目单独启动
if (!window.__POWERED_BY_QIANKUN__) {
  new Vue({
    el,
    router,
    store,
    render: h => h(App),
  });
}

/**
 * 子项目挂载前生命周期
 */
export async function bootstrap() {
  postPV();
  await createUser();
}

export async function mount(props) {
  instance = new Vue({
    el,
    router,
    store,
    render: h => h(App, { props }),
  });
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}

/**
 * 上报PV
 * 查看 sessionStorage，sessionStorage中没有标识则上报PV
 */
function postPV() {
  const pvRecorded = sessionStorage.getItem('pvRecorded');
  if (pvRecorded) return;
  const appid = process.env.VUE_APP_APPID;
  window.__S_BUS__.$emit('pv', appid);
  sessionStorage.setItem('pvRecorded', 1);
}

/**
 * 创建用户，更新本地数据
 */
async function createUser() {
  // 不是微信环境或者没有token直接返回
  if (checkENV() !== 'wechat' || !getStorage('token')) return;

  // 注册用户时携带入口参数 绑定关系
  const currentId = process.env.VUE_APP_APPID;
  const relation = getStorage('relation');
  // 获取本项目的 uid
  const { uid, hasReport } = await apis.createUser(relation);

  // uid存在表示用户注册成功，记入本地
  if (uid) updateStorage('user', currentId, uid);

  // 本地储存分享信息
  genShareInfo();

  // 如果用户产生过报告 && 第一次进入
  if (hasReport && !sessionStorage.getItem('notFirst')) {
    sessionStorage.setItem('notFirst', 1);
    return goHome();
  }
}
