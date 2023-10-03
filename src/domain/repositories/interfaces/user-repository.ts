import { User } from "../../entities/user";

export interface UserDTO {
  name: string;
  email: string;
}


export interface IUserRepository {
  create({name, email}: UserDTO): Promise<User>;
  delete(id: string): Promise<User | undefined>;
  list(): Promise<User[]>;
}
