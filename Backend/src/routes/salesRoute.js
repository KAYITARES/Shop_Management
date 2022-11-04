import { Router } from "express";
import { get } from "mongoose";

import * as SalesRouter from "../controller/salesController";

const route = Router();

route
  .route("/")
  .post(SalesRouter.createController)
  .get(SalesRouter.getAllController);

route
  .route("/:id")
  .get(SalesRouter.getOneByIdController)
  .patch(SalesRouter.updateByIdController)
  .delete(SalesRouter.deleteOneByIdController);
export default route;
