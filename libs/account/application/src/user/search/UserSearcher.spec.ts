import { mock, MockProxy } from 'jest-mock-extended';
import { UserRepository } from '@frappe/account/domain';
import { UserSearcher } from '@frappe/account/application';
import { OrderTypes } from '@dinnosc/criteria';
import { UserMother } from '@frappe/account/test';

describe('UserSearcher', () => {
  let repository: MockProxy<UserRepository>;
  let service: UserSearcher;

  beforeEach(() => {
    repository = mock<UserRepository>();
    service = new UserSearcher({ userRepository: repository });
  });

  it('should return an empty result', async () => {
    repository.search.mockResolvedValue([]);
    repository.total.mockResolvedValue(0);

    const execute = async () => service.execute([], { by: '', type: OrderTypes.NONE });
    await expect(execute()).resolves.toEqual({ users: [], total: 0 });
  });

  it('should return filtered products by name', async () => {
    const users = Array.from({ length: 5 }, () => UserMother.random())
    const user = users[0];

    repository.search.mockResolvedValue([user]);
    repository.total.mockResolvedValue(1);

    const execute = async () => service.execute([{ field: 'name', operator: 'EQUAL', value: user.name.value }], { by: '', type: OrderTypes.NONE });
    await expect(execute()).resolves.toEqual({ users: [user.toPrimitives()], total: 1 });
  });

  it('should return filtered products by email', async () => {
    const users = Array.from({ length: 5 }, () => UserMother.random())
    const user = users[0];

    repository.search.mockResolvedValue([user]);
    repository.total.mockResolvedValue(1);

    const execute = async () => service.execute([{ field: 'email', operator: 'EQUAL', value: user.email.value }], { by: '', type: OrderTypes.NONE });
    await expect(execute()).resolves.toEqual({ users: [user.toPrimitives()], total: 1 });
  });
})
