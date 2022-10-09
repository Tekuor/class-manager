import express, { Request, Response, NextFunction } from "express";
import multer from "multer";
import Middleware from "../middleware/index";
const upload = multer({ dest: "tmp/" });

const router = express.Router();

const updateProfileImage = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const files = request.files ? request.files : [];
    const uploadedFiles = await MediaService.uploadFiles(files);
    response.status(200).send({ data: uploadedFiles });
  } catch (error) {
    next(error);
  }
};

router.put(
  "/profile-image",
  [upload.single("prifileImage"), Middleware.checkAuthentication],
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
