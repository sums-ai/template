/**
 * 读取缓存数据
 * @param {string} key
 */
export function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

/**
 * 写入缓存
 * @param {string} key
 * @param {*} value
 */
export function setStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

/**
 * 更新缓存对象
 * @param {string} type
 * @param {string} key
 * @param {*} value
 */
export function updateStorage(type, key, value) {
  let target = getStorage(type);
  if (typeof target !== 'object') return void 0;
  if (target === null) target = {};
  target[key] = value;
  return setStorage(type, target);
}

/**
 * 判断当前环境
 */
export function checkENV() {
  const inBrowser = typeof window !== 'undefined';
  const UA = inBrowser && window.navigator.userAgent.toLowerCase();
  const isWechat = UA && /micromessenger/.test(UA);
  return isWechat ? 'wechat' : 'h5';
}
