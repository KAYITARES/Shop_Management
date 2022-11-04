import { Router } from "express";
import * as UserController from "../controller/userController";

const route = Router();

route
  .route("/")
  .post(UserController.createController)
  .get(UserController.getAllController);
route
  .route("/:id")
  .patch(UserController.updateByIdController)
  .get(UserController.getOneByIdController)
  .delete(UserController.deleteOneByIdController);
export default route;
