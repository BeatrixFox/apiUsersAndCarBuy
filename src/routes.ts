import { Router, Application, json } from "express";
import {
  validateSchema,
  authenticationMiddleware,
  authenticationAdminMiddleware,
  userExistMiddleware,
} from "./middlewares";
import { userLoginSchema, userSchema, userUpdateSchema } from "./Schemas";
import {
  createUserController,
  getUsersController,
  loginUserController,
  deleteUserController,
  getOneUserController,
  updateUserController,
} from "./controllers";

const router = Router();

const routes = (app: Application) => {
  app.use(json());

  router.post(
    "/users",
    validateSchema(userSchema),
    userExistMiddleware,
    createUserController
  );
  router.get("/users", authenticationAdminMiddleware, getUsersController);
  router.post("/login", validateSchema(userLoginSchema), loginUserController);
  router.delete("/users/:uuid", authenticationMiddleware, deleteUserController);

  router.get("/users/profile", authenticationMiddleware, getOneUserController);
  router.patch(
    "/users/:uuid",
    authenticationMiddleware,
    validateSchema(userUpdateSchema),
    updateUserController
  );
  app.use(router);
};
export default routes;
