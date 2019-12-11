/**
 * @file
 * 全局路由守卫
 */
import { checkENV, getStorage, setStorage } from '@/utils';
import qs from 'qs';
import router from './router';

router.beforeEach((to, from, next) => next());

// 全局后置守卫用于配置微信SDK
router.afterEach(() => {
  if (checkENV() === 'wechat') {
    window.__S_setupSDK__ && window.__S_setupSDK__(...genShareInfo());
  }
});

/**
 * 生成分享信息
 */
function genShareInfo() {
  const { origin } = window.location;
  const packageName = `/${process.env.VUE_APP_BASE}`;
  const query = getStorage('relation')
  if (checkENV() === 'wechat') {
    // 分享链接中添加用户 uid
    const user = getStorage('user') || {};
    const uid = user[process.env.VUE_APP_APPID] || 0;
    query.uid = uid
  } else {
    // 分享链接中添加通用版的标识
    query.is_fission = 1
  }

  const relation = qs.stringify(query, { addQueryPrefix: true });
  const link = origin + packageName + relation;
  // 分享给朋友
  const appMessage = {
    title: '', // 分享标题
    desc: '', // 分享描述
    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: '', // 分享图标
  };
  // 分享到朋友圈
  const timeline = {
    title: '', // 分享标题
    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: '', // 分享图标
  };
  // 存入分享信息，用于agent项目分享
  setStorage('appMessage', appMessage);
  setStorage('timeline', timeline);
  return [appMessage, timeline];
}

export default router;
