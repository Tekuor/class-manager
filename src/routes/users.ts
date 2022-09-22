import express, { Request, Response } from "express";
import { IUser } from "./../mongoose/models/Users";

const router = express.Router();

const createUser = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post("/users", createUser);

const updateUser = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put("/users/:userId", updateUser);

const getUsers = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/users", getUsers);

const getUser = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/users/:userId", getUser);

const deleteUser = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/users/:userId", deleteUser);

export default router;
