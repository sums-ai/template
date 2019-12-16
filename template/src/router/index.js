/**
 * @file
 * 全局路由守卫
 */
import { checkENV, getStorage } from '@/utils';
import router from './router';

// 全局后置守卫用于配置微信SDK
router.afterEach(() => {
  if (checkENV() === 'wechat') {
    window.__S_setupSDK__ &&
      window.__S_setupSDK__(getStorage('appMessage'), getStorage('timeline'));
  }
});

export default router;
