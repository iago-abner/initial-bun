import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/use-cases/repositories/user-register-repository";

export class UserRepositoryMemory implements UserRepository{
  constructor(private users: User[]) { }

  async create(user: User): Promise<User> {
    const newUser = { ...user, id: Math.random() }
    this.users.push(newUser)
    return newUser
  }
  async findByName(name: string): Promise<User | null> {
    const res = this.users.find(user => user.name === name) || null
    return res
  }

}
