export class AppError extends Error {
    constructor(errorCode, message, statusCode) {
      super(message);
      this.errorCode = errorCode;
      this.statusCode = statusCode;
    }
  }
  
  export class ClientError extends Error {
      constructor( message, status = 400) {
          super(message)
          this.statusCode = status
      }
  }