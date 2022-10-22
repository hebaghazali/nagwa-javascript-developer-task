export default class AppError extends Error {
  statusCode: number;
  status: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'Client Error' : 'Error';

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
