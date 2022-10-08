import express, { Request, Response } from "express";
import StudentService from "../services/students";
import Middleware from "../middleware/index";
import { CreateStudentValidation } from "../validationClasses/students/createStudent";
import { UpdateStudentValidation } from "../validationClasses/students/updateStudent";
import multer from "multer";
import { csvToJson } from "../services/csvToJson";

const upload = multer({ dest: "tmp/" });

const router = express.Router();

const createStudent = async (request: Request, response: Response) => {
  try {
    const { firstName, lastName, dateOfBirth, classId } = request.body;
    const data = await StudentService.createStudent({
      firstName,
      lastName,
      dateOfBirth,
      classId,
    });
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post(
  "/students",
  [
    Middleware.checkAuthentication,
    Middleware.hasAccessToResource(["teacher"]),
    Middleware.requestValidation(CreateStudentValidation),
  ],
  createStudent
);

const updateStudent = async (request: Request, response: Response) => {
  try {
    const body = request.body;
    const { studentId } = request.params;
    const data = await StudentService.updateStudent(body, studentId);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put(
  "/students/:studentId",
  [
    Middleware.checkAuthentication,
    Middleware.hasAccessToResource(["teacher"]),
    Middleware.requestValidation(UpdateStudentValidation),
  ],
  updateStudent
);

const getStudents = async (request: Request, response: Response) => {
  try {
    const data = await StudentService.getStudents({});
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get(
  "/students",
  [Middleware.checkAuthentication, Middleware.hasAccessToResource(["teacher"])],
  getStudents
);

const getStudent = async (request: Request, response: Response) => {
  try {
    const { studentId } = request.params;
    const data = await StudentService.getStudent(studentId);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get(
  "/students/:studentId",
  [Middleware.checkAuthentication, Middleware.hasAccessToResource(["teacher"])],
  getStudent
);

const deleteStudent = async (request: Request, response: Response) => {
  try {
    const { studentId } = request.params;
    const data = await StudentService.deleteStudent(studentId);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete(
  "/students/:studentId",
  [Middleware.checkAuthentication, Middleware.hasAccessToResource(["teacher"])],
  deleteStudent
);

const uploadStudents = async (request: Request, response: Response) => {
  try {
    const file: any = request.file ? request.file : {};
    await csvToJson(`${file.filename}`);
    console.log(file);
    response.status(200).send({ data: "Students uploaded successfully" });
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post(
  "/students/upload",
  [
    upload.single("file"),
    Middleware.checkAuthentication,
    Middleware.hasAccessToResource(["teacher"]),
  ],
  uploadStudents
);
export default router;
