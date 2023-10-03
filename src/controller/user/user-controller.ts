import { CreateUserUseCase } from "../../domain/use-cases/user/create-user/create-user-use-case";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase){}

  async handler(req: Request, res: Response){
    try {
      const {name, email} = req.body
      const response = await this.createUserUseCase.execute({name, email})
      return response
    }catch(error) {
      return res.status(400).json({ message: error?.message })
    }
  }
}
