import QRCode from 'qrcode';
import qs from 'qs';
import {
  checkENV,
  getRelation,
  getStorage,
  getUID,
  setStorage
} from './common';
/**
 * 生成分享信息
 */
export function genShareInfo() {
  const { origin } = window.location;
  const packageName = `/${process.env.VUE_APP_BASE}`;
  // 分享链接中添加用户 uid
  const uid = getUID();
  const relation = qs.stringify(getRelation({ uid }), { addQueryPrefix: true });
  const link = origin + packageName + relation;
  const imgUrl = 'https://faceplus.vsuan.com/UI_daili/crush/icon.png';

  // 分享给朋友
  const appMessage = {
    title: '', // 分享标题
    desc: '', // 分享描述
    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl // 分享图标
  };
  // 分享到朋友圈
  const timeline = {
    title: '', // 分享标题
    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl // 分享图标
  };
  // 存入分享信息，用于agent项目分享
  setStorage('appMessage', appMessage);
  setStorage('timeline', timeline);
  return [appMessage, timeline];
}

/**
 * 生成二维码地址
 */
export function genQRUrl() {
  const addon = checkENV() === 'wechat' ? { uid: getUID() } : { is_fission: 1 };
  const query = qs.stringify(getRelation(addon), { addQueryPrefix: true });
  const url = getStorage('shareDomain');
  return url + query;
}

/**
 * 生成分享二维码
 * @param {string} errorCorrectionLevel 二维码冗余率
 */
export async function genQR(errorCorrectionLevel = 'L') {
  return await QRCode.toDataURL(genQRUrl(), { errorCorrectionLevel });
}
