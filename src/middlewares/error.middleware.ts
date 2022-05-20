import express from 'express';

import HttpException from '../exceptions/HttpException';

function errorMiddleware(
  err: HttpException,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (err) {
    const status = err.status || 500;
    const message = err.message || 'Server Error';

    res.status(status).json({ status, message });
  }
}

export default errorMiddleware;
