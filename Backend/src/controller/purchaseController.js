import PurchaseModel from "../models/purchase";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalController";

export const createController = create(PurchaseModel);

export const getAllController = getAll(PurchaseModel);

export const getOneByIdController = getOneById(PurchaseModel);

export const updateByIdController = updateOneById(PurchaseModel);

export const deleteOneByIdController = deleteOneById(PurchaseModel);
