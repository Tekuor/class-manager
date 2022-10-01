import express, { Request, Response } from "express";
import Middleware from "../middleware/index";
import ClassService from "../services/classes";
import { CreateClassValidation } from "../validationClasses/class/createClass";
import { UpdateClassValidation } from "../validationClasses/class/updateClass";

const router = express.Router();

const createClass = async (request: Request, response: Response) => {
  try {
    const { name, description } = request.body;
    const data = await ClassService.createClass({ name, description });
    response.status(201).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post(
  "/classes",
  [
    Middleware.checkAuthentication,
    Middleware.hasAccessToResource(["teacher"]),
    Middleware.requestValidation(CreateClassValidation),
  ],
  createClass
);

const updateClass = async (request: Request, response: Response) => {
  try {
    const body = request.body;
    const { classId } = request.params;
    const data = await ClassService.updateClass(body, classId);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put(
  "/classes/:classId",
  [
    Middleware.checkAuthentication,
    Middleware.hasAccessToResource(["teacher"]),
    Middleware.requestValidation(UpdateClassValidation),
  ],
  updateClass
);

const getClasses = async (request: Request, response: Response) => {
  try {
    const data = await ClassService.getClasses({});
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get(
  "/classes",
  [Middleware.checkAuthentication, Middleware.hasAccessToResource(["teacher"])],
  getClasses
);

const getClass = async (request: Request, response: Response) => {
  try {
    const { classId } = request.params;
    const data = await ClassService.getClass(classId);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get(
  "/classes/:classId",
  [Middleware.checkAuthentication, Middleware.hasAccessToResource(["teacher"])],
  getClass
);

const deleteClass = async (request: Request, response: Response) => {
  try {
    const { classId } = request.params;
    const data = await ClassService.deleteClass(classId);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete(
  "/classes/:classId",
  [Middleware.checkAuthentication, Middleware.hasAccessToResource(["teacher"])],
  deleteClass
);

export default router;
