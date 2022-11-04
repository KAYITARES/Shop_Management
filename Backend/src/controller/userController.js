import UserModel from "../models/user";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalController";

export const createController = create(UserModel);

export const getAllController = getAll(UserModel);

export const getOneByIdController = getOneById(UserModel);

export const updateByIdController = updateOneById(UserModel);

export const deleteOneByIdController = deleteOneById(UserModel);
