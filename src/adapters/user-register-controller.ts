import { Express } from 'express'
import { UserRegister } from "../domain/use-cases/user-register";

export class UserRegisterController {
  constructor(
      readonly UserRegister: UserRegister,
      readonly server: Express
    ) {
      server.post('/users', async (req, res) => {
        console.log(req.body)
        const { name, email } = req.body;
        await this.UserRegister.execute({ name, email })
        return res.status(201).json("ok")
      })
    }
}
