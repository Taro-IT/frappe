/* User Story: Frappe 68 */

import { UserRepository, UserNotFound } from '@frappe/account/domain';
import { UserDeleter } from './UserDeleter';
import { UserFinder } from '../find';
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { UserMother } from '@frappe/account/test';

describe('UserDeleter', () => {
  let userRepository: MockProxy<UserRepository>;
  let userFinder: DeepMockProxy<UserFinder>;

  let deleter: UserDeleter;

  beforeEach(() => {
    userRepository = mock<UserRepository>();
    userFinder = mockDeep<UserFinder>(new UserFinder({ userRepository }));

    deleter = new UserDeleter({ userRepository, userFinder });
  });

  it('should delete a User', async () => {
    const user = UserMother.random();
    userRepository.find.mockResolvedValueOnce(user);
    await deleter.execute(user.id.value);

    expect(userRepository.delete).toHaveBeenCalledWith(user.id);
  });

  it('should throw a UserNotFound', async () => {
    const user = UserMother.random();

    userRepository.find.mockRejectedValueOnce(UserNotFound);
    const response = () => deleter.execute(user.id.value);

    await expect(async () => response()).rejects.toThrow(UserNotFound);
  });
});
