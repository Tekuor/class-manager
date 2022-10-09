import express, { Request, Response, NextFunction } from "express";
import multer from "multer";
import Middleware from "../middleware/index";
import MediaService from "../services/media";
import UserService from "../services/users";
const upload = multer({ dest: "tmp/" });

const router = express.Router();

const updateProfileImage = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const file: any = request.file ? request.file : {};
    const uploadedFiles = await MediaService.uploadFiles(
      [file],
      "profileImages"
    );
    const requestUser = (request as any).user;
    const user = await UserService.updateUser(
      { profileImage: uploadedFiles[0] },
      requestUser._id
    );
    response.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

router.put(
  "/profile-image",
  [upload.single("profileImage"), Middleware.checkAuthentication],
  updateProfileImage
);

const createUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    response.status(200).send();
  } catch (error) {
    next(error);
  }
};

router.post("/users", createUser);

const updateUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    response.status(200).send();
  } catch (error) {
    next(error);
  }
};

router.put("/users/:userId", updateUser);

const getUsers = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    response.status(200).send();
  } catch (error) {
    next(error);
  }
};

router.get("/users", getUsers);

const getUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    response.status(200).send();
  } catch (error) {
    next(error);
  }
};

router.get("/users/:userId", getUser);

const deleteUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    response.status(200).send();
  } catch (error) {
    next(error);
  }
};

router.delete("/users/:userId", deleteUser);

export default router;
