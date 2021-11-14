import { User, UserId } from '../../model';
import { Nullable } from '@frappe/common/utils';

export interface UserRepository {
  save(user: User): Promise<void>;
  find(id: UserId): Promise<Nullable<User>>;
}
