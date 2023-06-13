import type { NextFunction, Request, Response } from 'express';

// dependecies
import dotenv from 'dotenv';
import httpStatus from 'http-status';
import ResponseCodes from '../../../commons/response-codes';

dotenv.config();

type TResponseError = {
   statusCode?: string;
   status?: number;
   message?: string;
   stack?: string;
};

export type TNormalizedError = Error & TResponseError;

class ErrorHandler {
   public static notFound = (req: Request, res: Response, next: NextFunction) => {
      const error = new Error(`cannot find -> ${req.originalUrl}`);
      res.status(404);
      next(error);
   };

   public static errorResponse = (error: TNormalizedError, req: Request, res: Response) => {
      console.log('zzzzzzzzzzzzzzzzz');
      const status = error.status || httpStatus.INTERNAL_SERVER_ERROR;
      const statusCode = error.statusCode || ResponseCodes.INTERNAL_SERVER_ERROR;
      res.status(status);
      res.json({
         status,
         code: statusCode,
         data: {
            message: error.message,
            stack: process.env.NODE_ENV === 'production' ? '' : error.stack,
         },
      });
   };
}

export default ErrorHandler;
