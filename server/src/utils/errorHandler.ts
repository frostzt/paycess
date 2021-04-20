import { Request, Response, NextFunction } from 'express';
import { CastError } from 'mongoose';
import createError from './createError';

// Error handlers
const handleCastErrorDB = (err: CastError) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new createError(message, 400);
};

const handleDuplicateFieldsDB = (err: any) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate value found: ${value}. Please change the value!`;
  return new createError(message, 400);
};

const handleValidationErrorDB = (err: any) => {
  const errors = Object.values(err.errors).map((el: any) => el.message);
  const message = `Invalid input data! ${errors.join('. ')}`;
  return new createError(message, 400);
};

const handleJWTError = () =>
  new createError('Invalid token, please login again!', 401);

const handleJWTExpiredError = () =>
  new createError('Your token has expired, please login again!', 401);

// Send errors in development
const sendDevelopmentError = (err: createError, _: Request, res: Response) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// Send errors in production
const sendProductionError = (err: createError, _: Request, res: Response) => {
  console.error('ERROR!', err);
  return res.status(err.statusCode).json({
    status: 'error',
    message: err.message,
  });
};

// Global Error Handler
module.exports = (
  err: createError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendDevelopmentError(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = Object.create(err);

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError') {
      error = handleValidationErrorDB(error);
    }
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendProductionError(err, req, res);
  }

  next();
};
