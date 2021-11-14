import { User } from '../../model';
import { Criteria } from '@dinnosc/criteria';

export interface UserRepository {
  save(user: User): Promise<void>;
  search(criteria: Criteria<User>): Promise<User[]>;
  total(): Promise<number>;
}
