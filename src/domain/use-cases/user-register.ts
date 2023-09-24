import { UserRegisterUseCase } from "./interfaces/user-register";
import { UserRepository } from "./repositories/user-register-repository";

type UserRegisterInput = { name: string, email: string }

export class UserRegister implements UserRegisterUseCase<UserRegisterInput, void> {
  constructor(private readonly repository: UserRepository) { }

  async execute(input: UserRegisterInput): Promise<void> {
    const { name, email } = input;
    const userExists = await this.repository.findByName(name)

    if (userExists) throw new Error('User already exists')

    await this.repository.create({name, email})
  }
}
