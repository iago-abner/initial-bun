import { Router } from "express";
import { usersRoutes } from "./user";

const router = Router();

router.use("/users", usersRoutes);

export { router };
