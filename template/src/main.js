import '@/plugins';
import router from '@/router';
import api from '@/services';
import store from '@/store';
import { checkENV, getStorage, updateStorage } from '@/utils';
import 'minireset.css';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

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
export async function bootstrap() {}

export async function mount(props) {
  instance = new Vue({
    el,
    router,
    store,
    async beforeCreate() {
      await createUser();
    },
    created() {
      postPV();
    },
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
  // 查看本地缓存，判断用户是否已注册
  const user = getStorage('user');
  const currentId = process.env.VUE_APP_APP_ID;
  if (user && user[currentId]) return; // 如果当前用户已存在 返回
  // 注册用户时携带入口参数 绑定关系
  const relation = getStorage('relation');
  const { uid } = await api.createUser(relation);
  // uid存在表示用户注册成功，记入本地
  if (uid) return updateStorage('user', currentId, uid);
}
