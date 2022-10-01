import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import AuthService from "../services/auth";
import UserService from "../services/users";
import { LoginValidation } from "../validationClasses/auth/login";
import Middleware from "../middleware/index";
import { RegisterValidation } from "./../validationClasses/auth/register";
import { IRegisterResponse } from "../types/interfaces";
import { ErrorException } from "../error-handler/error-exception";
import { ErrorCode } from "../error-handler/error-code";

const router = express.Router();

const login = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = request.body;

    const user = await UserService.getUsers({ email });
    if (user.length && (await bcrypt.compare(password, user[0].password))) {
      const token = AuthService.generateAccessToken(user[0]);
      response.status(200).send({ token });
    } else {
      throw new ErrorException(ErrorCode.Unauthenticated, [
        "Invalid Credentials",
      ]);
    }
  } catch (error) {
    next(error);
  }
};

router.post("/login", [Middleware.requestValidation(LoginValidation)], login);

const register = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { email } = request.body;

    const oldUser = await UserService.getUsers({ email });
    if (oldUser && oldUser.length) {
      throw new ErrorException(ErrorCode.ResourceExists, [
        "User already exists",
      ]);
    }

    const user = await UserService.createUser(request.body);
    let data = {} as IRegisterResponse;
    if (user) {
      const token = AuthService.generateAccessToken(user);
      data.token = token;
    }
    response.status(201).json(user);
  } catch (err: any) {
    next(err);
  }
};

router.post(
  "/register",
  [Middleware.requestValidation(RegisterValidation)],
  register
);

export default router;
