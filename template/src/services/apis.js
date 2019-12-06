/**
 * @file
 * APIs
 */
import { checkENV } from '@/utils';

const commonAPI = {
  example1: 'GET /example1',
  example2: 'POST /example2',
  example3: 'URL /example3',
  createUser: 'POST /createUser',
};

const h5API = {
  example1: 'GET /h5/example1',
  example2: 'POST /h5/example2',
};

/**
 * 根据环境切换api
 */
function genAPI() {
  if (checkENV() === 'wechat') return commonAPI;
  return Object.assign({}, commonAPI, h5API);
}

export default genAPI();
