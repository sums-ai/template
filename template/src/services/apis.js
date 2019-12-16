/**
 * @file
 * APIs
 */
import { checkENV } from '@/utils';

const commonAPI = {
  example1: 'GET /example1',
  addReport: 'POST /addReport',
  example3: 'URL /example3',
  createUser: 'POST /createUser',
  payment: 'URL /payment',
};

const h5API = {
  example1: 'GET /h5/example1',
  addReport: 'POST /h5/addReport',
  payment: 'URL /h5/payment',
};

/**
 * 根据环境切换api
 */
function genAPI() {
  if (checkENV() === 'wechat') return commonAPI;
  return Object.assign({}, commonAPI, h5API);
}

export default genAPI();
