import { Request, Response, NextFunction } from 'express';
import type { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.systemMessage || 'JSHUB_UNKNOWN_ERR';

  res.status(errorStatus).json({ errorStatus, errorMessage });
};

export { errorHandler };
