import { Router } from "express";

import * as ProductController from "../controller/productController";

const route = Router();
route
  .route("/")
  .post(ProductController.createController)
  .get(ProductController.getAllController);
route
  .route("/:id")
  .patch(ProductController.updateByIdController)
  .get(ProductController.getOneByIdController)
  .delete(ProductController.deleteOneByIdController);
export default route;
