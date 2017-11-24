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
}
