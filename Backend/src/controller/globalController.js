import Response from "../utils/Response";
import status from "http-status";
// create function
export const create = (Model) => async (req, res, next) => {
  try {
    const data = await Model.create(req.body);
    if (!data) {
      return Response.errorMessage(
        res,
        "failed to register",
        status.BAD_REQUEST
      );
    }
    return Response.successMessage(
      res,
      "Success Created",
      data,
      status.CREATED
    );
  } catch (error) {
    console.log(error);
  }
};

//function for getting all data
export const getAll = (Model) => async (req, res, next) => {
  try {
    const data = await Model.find();
    if (!data) {
      return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
    }
    return Response.successMessage(res, "success", data, status.OK);
  } catch (error) {
    console.log(error);
  }
};
//function for getting one by id

export const getOneById = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findById(req.params.id);
    if (!data) {
      return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
    }
    return Response.successMessage(res, "success", data, status.OK);
  } catch (error) {
    console.log(error);
  }
};
//update one by id
export const updateOneById = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); //new:true idufasha gusihora data zabaye updated instead of yo kureturn izari zisanzwe
    if (!data) {
      return Response.errorMessage(
        res,
        "failed to update!",
        status.BAD_REQUEST
      );
    }
    return Response.successMessage(
      res,
      "successfully updated",
      data,
      status.OK
    );
  } catch (error) {
    console.log(error);
  }
};
export const deleteOneById = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);
    if (!data) {
      return Response.errorMessage(
        res,
        "failed to delete!",
        status.BAD_REQUEST
      );
    }
    return Response.successMessage(
      res,
      "successfully deleted",
      data,
      status.OK
    );
  } catch (error) {
    console.log(error);
  }
};
