import express, { Request, Response, NextFunction } from "express";
import TeacherService from "../services/teachers";
import Middleware from "../middleware/index";
import { CreateTeacherValidation } from "../validationClasses//teachers/createTeacher";
import { UpdateTeacherValidation } from "./../validationClasses/teachers/updateTeacher";

const router = express.Router();

const createTeacher = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, phone, classIds } = request.body;
    const data = await TeacherService.createTeacher({
      firstName,
      lastName,
      phone,
      classIds,
    });
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.post(
  "/teachers",
  [
    Middleware.checkAuthentication,
    Middleware.requestValidation(CreateTeacherValidation),
  ],
  createTeacher
);

const updateTeacher = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const body = request.body;
    const { teacherId } = request.params;
    const data = await TeacherService.updateTeacher(body, teacherId);
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.put(
  "/teachers/:teacherId",
  [
    Middleware.checkAuthentication,
    Middleware.requestValidation(UpdateTeacherValidation),
  ],
  updateTeacher
);

const getTeachers = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const data = await TeacherService.getTeachers({});
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.get("/teachers", [Middleware.checkAuthentication], getTeachers);

const getTeacher = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { teacherId } = request.params;
    const data = await TeacherService.getTeacher(teacherId);
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.get(
  "/teachers/:teacherId",
  [Middleware.checkAuthentication],
  getTeacher
);

const deleteTeacher = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { teacherId } = request.params;
    const data = await TeacherService.deleteTeacher(teacherId);
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.delete(
  "/teachers/:teacherId",
  [Middleware.checkAuthentication],
  deleteTeacher
);

export default router;
