import {User} from "../../model"
export interface UserRepository {
  save(user:User): Promise<void>;
}
