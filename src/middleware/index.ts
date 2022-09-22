import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { IRequestUser } from "../types/interfaces";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ErrorException } from "../error-handler/error-exception";
import { ErrorCode } from "../error-handler/error-code";
const { TOKEN_SECRET = "" } = process.env;

class MiddlewareService {
  checkAuthentication = (
    req: Request & { user: IRequestUser },
    res: Response,
    next: any
  ) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, TOKEN_SECRET as string, (err: any, user: any) => {
      console.log(err);

      if (err) {
        const err = new ErrorException(ErrorCode.Forbidden);
        next(err);
      }

      req.user = user;

      next();
    });
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
}

export default new MiddlewareService();
