import { Router, Application, json } from "express";
import {
  validateSchema,
  authenticationMiddleware,
  authenticationAdminMiddleware
} from "./middlewares";
import { userLoginSchema, userSchema, userUpdateSchema,buyCarSchema,productSchema } from "./Schemas";
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

  router.get("/user/shopp_car",   authenticationMiddleware, getBuyCarController);
  router.get("/user/shopp_car/:uuid", authenticationMiddleware, getOneShoppCarController);
  router.post("/user/shopp_car/register", authenticationMiddleware, validateSchema(buyCarSchema) , createShoppCarController);
  router.delete("/user/shop_car/:uuid", authenticationMiddleware , deleteShoppCarController);

  router.get("/user/shopp_car/product_list", authenticationMiddleware , getProductsController);
  router.get("/user/shopp_car/product_list/:uuid" , authenticationMiddleware , getOneShoppCarController);
  router.post("/user/shopp_car/product_list/product" , authenticationMiddleware ,validateSchema(productSchema) , addProductCarListController);
  router.delete("/user/shopp_car/:uuid" , authenticationMiddleware , delProductController);

  app.use(router);
};
export default routes;
