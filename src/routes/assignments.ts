import express, { Request, Response, NextFunction } from "express";
import AssignmentService from "../services/assignments";
import Middleware from "../middleware/index";
import MediaService from "../services/media";
import multer from "multer";
const upload = multer({ dest: "tmp/" });

const router = express.Router();

const createAssignment = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { name, description, classId, deadline } = request.body;
    const user = (request as any).user;
    const files: any = request.files ? request.files : [];
    let uploadedFiles: string[] = [];
    if (files.length) {
      uploadedFiles = await MediaService.uploadFiles(files, "assignments");
    }

    const data = await AssignmentService.createAssignment({
      name,
      description,
      classId,
      deadline,
      teacherId: user.accountId,
      attachments: uploadedFiles,
    });
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.post(
  "/assignments",
  [upload.array("assignments"), Middleware.checkAuthentication],
  createAssignment
);

const updateAssignment = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const body = request.body;
    const { assignmentId } = request.params;
    const data = await AssignmentService.updateAssignment(body, assignmentId);
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.put("/assignments/:assignmentId", updateAssignment);

const getAssignments = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const data = await AssignmentService.getAssignments({});
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.get("/assignments", getAssignments);

const getAssignment = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { assignmentId } = request.params;
    const data = await AssignmentService.getAssignment(assignmentId);
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.get("/assignments/:assignmentId", getAssignment);

const deleteAssignment = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { assignmentId } = request.params;
    const data = await AssignmentService.deleteAssignment(assignmentId);
    response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

router.delete("/assignments/:assignmentId", deleteAssignment);

export default router;
