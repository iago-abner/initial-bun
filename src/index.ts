import express from 'express'
import { User } from './domain/entities/user'
import { UserRepositoryMemory } from './infra/memory/UserRepositoryMemory'
import { UserUseCases } from './domain/use-cases/user/user-use-case'
import { UserController } from './controller/user'

const port = 3000
const app = express()
app.use(express.json())

const users: User[] = []
const userRepository = new UserRepositoryMemory(users)
const userUseCase = new UserUseCases(userRepository)
new UserController(userUseCase, app)

app.listen(port)

console.log(
  `Server is running at port:${port}`
);
