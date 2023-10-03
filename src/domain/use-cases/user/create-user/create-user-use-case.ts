import { User } from "../../../entities/user";
import { IUserRepository } from "../../../repositories/interfaces/user-repository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository){}

  async execute({name, email}: IRequest): Promise<User> {
    // Implementa a logica para verificar se o usuário já existe
    return this.userRepository.create({name, email});
  }
}

export { CreateUserUseCase }
