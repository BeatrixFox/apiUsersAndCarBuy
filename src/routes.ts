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
import { createShoppCarController, deleteShoppCarController, getBuyCarController, getOneShoppCarController } from "./controllers/buyCarController";
import { addProductCarListController, delProductController, getProductsController } from "./controllers/ProductsController";

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

  router.get("/user/shoppingCars", authenticationMiddleware, getBuyCarController);
  router.get("/user/oneShoppCar", authenticationMiddleware, getOneShoppCarController);
  router.post("/user/saveShoppCar", authenticationMiddleware , createShoppCarController);
  router.delete("/user/eraseShoppCar", authenticationMiddleware , deleteShoppCarController);

  router.get("/user/shoppCar/productList", authenticationMiddleware , getProductsController);
  router.post("/user/shoppCar/addProduct" , authenticationMiddleware , addProductCarListController);
  router.delete("/user/shoppCar/delProduct" , authenticationMiddleware , delProductController);

  app.use(router);
};
export default routes;
