import 'isomorphic-fetch';

const config = {
  backendUrl: 'https://rdap.nic.cz/',
  invalidBackendUrl: 'http://localhost:0/',
  useRealBackend: true
};

if (!config.useRealBackend) {
  /* eslint global-require: 0 */
  global.fetch = require('jest-fetch-mock');
}

export default config;
