import SalesModal from "../models/sales";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalController";

export const createController = create(SalesModal);

export const getAllController = getAll(SalesModal);

export const getOneByIdController = getOneById(SalesModal);

export const updateByIdController = updateOneById(SalesModal);

export const deleteOneByIdController = deleteOneById(SalesModal);
