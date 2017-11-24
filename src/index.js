import r from './request';
/**
 * Interface to the RDAP API.
 * @param backendUrl API URL, including protocol
 *
 * @example
 * const rdap = new RDAP('http://localhost:5000/')
 */
export default class RDAP {
  constructor(backendUrl) {
    this.config = {
      backendUrl
    };
  }

  async domain(name) {
    return r(this.config.backendUrl, 'domain', name);
  }

  // async nameserver(name) {
  //   return r(this.config.backendUrl, 'nameserver', name);
  // }
  //
  // async entity(name) {
  //   return r(this.config.backendUrl, 'entity', name);
  // }
}
