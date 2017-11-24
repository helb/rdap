import Rdap from '../src/';
import config from '../test-config.js';

describe('Throws an error', () => {
  test('with invalid backend URL', () => {
    const invalidBackend = new Rdap(config.invalidBackendUrl);
    expect.assertions(1);
    return expect(invalidBackend.domain(config.domains.default)).rejects.toBeDefined();
  });
});
