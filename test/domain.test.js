import Rdap from '../src/';
import config from '../test-config.js';
import mocks from './__mocks__/domain.mock.js';

describe('Domain', () => {
  const backend = new Rdap(config.backendUrl);

  test('gets info for a default domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock1));
    }
    expect.assertions(3);
    const data = await backend.domain(config.domains.default);
    expect(data).toBeDefined();
    expect(data.nameservers).toBeDefined();
    expect(data.nameservers.length).toBeGreaterThan(0);
  });

  test('returns an error message for a non-existing domain', async () => {
    if (!config.useRealBackend) {
      fetch.mockResponse(JSON.stringify(mocks.mock2));
    }
    expect.assertions(3);
    const data = await backend.domain(config.domains.nonexisting);
    expect(data).toBeDefined();
    expect(data.status).toBeDefined();
    expect(data.status).toBe(404);
  });
});
