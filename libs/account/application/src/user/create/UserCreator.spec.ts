import { mock, MockProxy } from 'jest-mock-extended';
import { UserRepository } from '@frappe/account/domain';
import { UserCreator } from './UserCreator';
import { UserMother } from '@frappe/account/test';

describe('UserCreator', () => {
  let repository: MockProxy<UserRepository>;
  let service: UserCreator;

  beforeEach(() => {
    repository = mock();
    service = new UserCreator({ userRepository: repository });
  });

  it('should create a new User', async () => {
    const user = UserMother.random();

    await service.execute(user.id.value, user.email.value, user.role.value, user.name.value);

    expect(repository.save).toHaveBeenCalledWith(user);
  });
});
