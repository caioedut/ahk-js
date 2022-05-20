import express from 'express';

function error404Middleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const status = 404;
  const message = 'Not Found';

  res.status(status).json({ status, message });
}

export default error404Middleware;
