import express from 'express'
import { UserRepositoryMemory } from './external/memory/UserRepositoryMemory'
import { User } from './domain/entities/user'
import { UserRegister } from './domain/use-cases/user-register'
import { UserRegisterController } from './adapters/user-register-controller'

const port = 3000
const app = express()
app.use(express.json())

const users: User[] = []
const userRepository = new UserRepositoryMemory(users)
const registerUser = new UserRegister(userRepository)
new UserRegisterController(registerUser, app)

app.listen(port)

console.log(
  `Server is running at port:${port}`
);
