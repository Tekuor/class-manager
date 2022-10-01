import express, { Request, Response } from "express";
import StudentService from "../services/students";

const router = express.Router();

const createStudent = async (request: Request, response: Response) => {
  try {
    // const {} = request.body;
    // const data = await StudentService.createStudent({});
    response.status(200).send({});
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post("/students", createStudent);

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

router.put("/students/:studentId", updateStudent);

const getStudents = async (request: Request, response: Response) => {
  try {
    const data = await StudentService.getStudents({});
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/students", getStudents);

const getStudent = async (request: Request, response: Response) => {
  try {
    const { studentId } = request.params;
    const data = await StudentService.getStudent(studentId);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/students/:studentId", getStudent);

const deleteStudent = async (request: Request, response: Response) => {
  try {
    const { studentId } = request.params;
    const data = await StudentService.deleteStudent(studentId);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/students/:studentId", deleteStudent);

export default router;
