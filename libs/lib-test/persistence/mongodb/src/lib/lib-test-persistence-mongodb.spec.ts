import { libTestPersistenceMongodb } from './lib-test-persistence-mongodb';

describe('libTestPersistenceMongodb', () => {
  it('should work', () => {
    expect(libTestPersistenceMongodb()).toEqual('lib-test-persistence-mongodb');
  });
});
