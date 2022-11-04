import { Router } from "express";
import * as PurchaseController from "../controller/purchaseController";

const route = Router();
route
  .route("/")
  .post(PurchaseController.createController)
  .get(PurchaseController.getAllController);
route
  .route("/:id")
  .patch(PurchaseController.updateByIdController)
  .get(PurchaseController.getOneByIdController)
  .delete(PurchaseController.deleteOneByIdController);

export default route;
