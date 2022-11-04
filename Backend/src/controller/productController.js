import ProductModel from "../models/product";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalController";

export const createController = create(ProductModel);

export const getAllController = getAll(ProductModel);

export const getOneByIdController = getOneById(ProductModel);

export const updateByIdController = updateOneById(ProductModel);

export const deleteOneByIdController = deleteOneById(ProductModel);
