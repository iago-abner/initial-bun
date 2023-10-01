import { UserUseCases } from "../../domain/use-cases/user/user-use-case";

export interface CustomRequest {
  body: any;
  params: any;
}

export interface CustomResponse {
  status(code: number): this;
  json(data: any): this;
  send(): this;
}

export class UserController {
  constructor(readonly userUseCases: UserUseCases) {}

    async list(request: CustomRequest, response: CustomResponse) {
      const users = await this.userUseCases.list();
      return response.status(200).json(users);
    }

    async create(request: CustomRequest, response: CustomResponse) {
      const { name, email } = request.body;
      await this.userUseCases.create({ name, email });
      return response.status(201).send();
    }

    async update(request: CustomRequest, response: CustomResponse) {
      const { id } = request.params;
      const { name, email } = request.body;
      await this.userUseCases.update(id, { name, email });
      return response.status(200).send();
    }

    async delete(request: CustomRequest, response: CustomResponse) {
      const { id } = request.params;
      await this.userUseCases.delete(id);
      return response.status(200).send();
    }
}
