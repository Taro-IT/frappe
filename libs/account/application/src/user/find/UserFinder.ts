import { UserId, UserNotFound, UserPrimitives, UserRepository } from '@frappe/account/domain';

interface UserFinderDeps {
  readonly userRepository: UserRepository;
}

export class UserFinder {
  private readonly userRepository: UserRepository;

  constructor({ userRepository }: UserFinderDeps) {
    this.userRepository = userRepository;
  }

  async execute(id: string): Promise<UserPrimitives> {
    const user = await this.userRepository.find(new UserId(id));

    if (user === null) {
      throw new UserNotFound(id);
    }

    return user.toPrimitives();
  }
}
