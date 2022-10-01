import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { IRequestUser } from "../types/interfaces";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ErrorException } from "../error-handler/error-exception";
import { ErrorCode } from "../error-handler/error-code";

class MiddlewareService {
  checkAuthentication = (req: Request, res: Response, next: any) => {
    const authHeader = req.headers["authorization"];
    const { TOKEN_SECRET = "" } = process.env;
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
      const err = new ErrorException(ErrorCode.Unauthenticated);
      next(err);
    }

    jwt.verify(
      token as string,
      TOKEN_SECRET as string,
      (err: any, user: any) => {
        if (err) {
          const err = new ErrorException(ErrorCode.Forbidden);
          next(err);
        }
        (req as Request & { user: IRequestUser }).user = user;
        next();
      }
    );
  };

  requestValidation = (validationClass: any) => {
    return function (req: Request, res: Response, next: NextFunction) {
      const output: any = plainToInstance(validationClass, req.body);
      validate(output, { skipMissingProperties: true }).then((errors) => {
        // errors is an array of validation errors
        if (errors.length > 0) {
          let errorTexts = Array();
          for (const errorItem of errors) {
            errorTexts = errorTexts.concat(errorItem.constraints);
          }

          const formattedErrors = errorTexts.map((error) =>
            String(Object.values(error))
          );
          const err = new ErrorException(ErrorCode.BadRequest, formattedErrors);
          next(err);
        } else {
          res.locals.input = output;
          next();
        }
      });
    };
  };

  hasAccessToResource = (validRoles: string[]) => {
    return function (req: Request, res: Response, next: NextFunction) {
      const userRole = (req as Request & { user: IRequestUser }).user.role;
      if (validRoles.includes(userRole)) {
        next();
      } else {
        const err = new ErrorException(ErrorCode.Forbidden);
        next(err);
      }
    };
  };
}

export default new MiddlewareService();
