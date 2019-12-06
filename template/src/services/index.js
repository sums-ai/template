import qs from 'qs';
import apis from './apis';
import request from './request';

/**
 * 生成请求方法
 * @param {string} params api地址和方法，可以是相对路径或者绝对路径
 */
function genRequest(params, fetch, apiPrefix = '') {
  // 获取方法和api
  const [method, api] = params.split(' ');

  // 如果是绝对地址，不需要补充前缀
  const httpRE = /^https?:\/\//;
  const url = (httpRE.test(api) ? '' : apiPrefix) + api;

  return function(data) {
    // URL为跳转
    if (method === 'URL') {
      const base = (httpRE.test(url) ? '' : process.env.VUE_APP_API_URL) + url;
      window.location.href = base + qs.stringify(data, { addQueryPrefix: true });
      return;
    }
    // GET方法
    if (method === 'GET') return fetch({ url, params: data, method });
    // POST方法
    return fetch({ url, data, method });
  };
}

const APIFunction = {};

Object.getOwnPropertyNames(apis).forEach(key => {
  APIFunction[key] = genRequest(apis[key], request, process.env.PREFIX);
});

export default APIFunction;
