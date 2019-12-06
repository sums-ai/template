import { checkENV, getStorage } from '@/utils';
import axios from 'axios';

// 创建axios实例
const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL, // 后台 api 的 url
  timeout: process.env.VUE_APP_API_TIMEOUT, // 请求超时时间
  validateStatus: status => status < 500,
});

request.interceptors.request.use(
  function(config) {
    // 微信环境添加token
    if (checkENV() === 'wechat') {
      const token = getStorage('token');
      config.headers.common['token'] = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function(response) {
    // TODO: 返回数据
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default request;
