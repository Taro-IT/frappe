import { libTestDomain } from './lib-test-domain';

describe('libTestDomain', () => {
  it('should work', () => {
    expect(libTestDomain()).toEqual('lib-test-domain');
  });
});
