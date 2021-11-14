import { mock, MockProxy } from 'jest-mock-extended';
import { UserNotFound, UserRepository } from '@frappe/account/domain';
import { UserFinder } from './UserFinder';
import { UserMother } from '@frappe/account/test';
import { UuidMother } from '@frappe/common/test';

describe('UserFinder', () => {
  let repository: MockProxy<UserRepository>;
  let service: UserFinder;

  beforeEach(() => {
    repository = mock<UserRepository>();
    service = new UserFinder({ userRepository: repository });
  })

  it('should return an UserPrimitives', async () => {
    const user = UserMother.random();
    repository.find.mockResolvedValue(user);

    await expect(service.execute(user.id.value)).resolves.toEqual(user.toPrimitives());
  });

  it('should throws an UserNotFound', async () => {
    const id = UuidMother.random();
    repository.find.mockResolvedValue(null);

    await expect(service.execute(id)).rejects.toThrow(UserNotFound);
  });
})
