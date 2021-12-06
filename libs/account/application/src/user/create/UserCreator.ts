import { Role, User, UserDisplayName, UserEmail, UserId, UserRepository, UserRole } from '@frappe/account/domain';

interface UserCreatorDeps {
  readonly userRepository: UserRepository;
}

export class UserCreator {
  private readonly userRepository: UserRepository;

  constructor({ userRepository }: UserCreatorDeps) {
    this.userRepository = userRepository;
  }

  async execute(id: string, email: string, role: Role, name: string) {
    const user = new User(new UserId(id), new UserEmail(email), new UserDisplayName(name), new UserRole(role));
    return this.userRepository.save(user);
  }
}
