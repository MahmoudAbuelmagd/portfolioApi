class AppError extends Error {
  constructor(message, statusCode, status = 'error') {
    super(message);
    this.statusCode = statusCode;
    this.status = status;
    Error.captureStackTrace(this, this.constructor); // optional but useful
  }
}

  module.exports = AppError;