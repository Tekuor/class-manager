import { ErrorCode } from "./error-code";

export class ErrorException extends Error {
  public status: number = 500;
  public errorMessage: string[] = [];
  constructor(
    code: string = ErrorCode.UnknownError,
    errorMessage: string[] = []
  ) {
    super(code);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = code;
    this.status = 500;
    this.errorMessage = errorMessage;
    switch (code) {
      case ErrorCode.Unauthenticated:
        this.status = 401;
        break;
      case ErrorCode.NotFound:
        this.status = 404;
        break;
      case ErrorCode.ResourceExists:
        this.status = 409;
        break;
      case ErrorCode.BadRequest:
        this.status = 400;
        break;
      case ErrorCode.Forbidden:
        this.status = 403;
        break;
      default:
        this.status = 500;
        break;
    }
  }
}
