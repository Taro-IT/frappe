import { commonPersistenceMongodb } from './common-persistence-mongodb';

describe('commonPersistenceMongodb', () => {
  it('should work', () => {
    expect(commonPersistenceMongodb()).toEqual('common-persistence-mongodb');
  });
});
