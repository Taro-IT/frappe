import { User, UserId } from '../../model';
import { Criteria } from '@dinnosc/criteria';
import { Nullable } from '@frappe/common/utils';

export interface UserRepository {
  save(user: User): Promise<void>;
  find(id: UserId): Promise<Nullable<User>>;
  search(criteria: Criteria<User>): Promise<User[]>;
  total(): Promise<number>;
}
