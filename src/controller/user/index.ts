import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/implementations/user-repository";
import { CreateUserUseCase } from "../../domain/use-cases/user/create-user/create-user-use-case";
import { CreateUserController } from "./user-controller";

const users: User[] = []
const usersRepository = new UserRepository(users)
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
