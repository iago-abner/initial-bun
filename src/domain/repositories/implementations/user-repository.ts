import { User } from "../../entities/user";
import { IUserRepository, UserDTO } from "../interfaces/user-repository";

class UserRepository implements IUserRepository{
  constructor(private users: User[]) {}

  create({ name, email }: UserDTO): Promise<User> {
    const user = new User(name, email);
    return Promise.resolve(user);
  }
  delete(id: string): Promise<User| undefined> {
    const user =  this.users.filter(user => user.id === id).pop()

    return Promise.resolve(user);
  }
  list(): Promise<User[]> {
    return Promise.resolve(this.users);
  }
}

export { UserRepository }
