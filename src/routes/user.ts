import { Router } from "express";
import { userController } from "../controller/user";

const usersRoutes = Router();

usersRoutes.get("/", (request, response) => {
  return userController.list(request, response);
});

usersRoutes.post("/", (request, response) => {
  return userController.create(request, response);
})

usersRoutes.delete("/:id", (request, response) => {
  return userController.delete(request, response);
})

usersRoutes.patch("/:id", (request, response) => {
  return userController.update(request, response);
})

export { usersRoutes };
