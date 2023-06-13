import { NextFunction, Request, Response } from 'express';

export type TResponseBody = {
   status: number;
   statusCode: string;
   response: Record<string, any>;
};

class ResponseHandler {
   public static responseHandler(req: Request, res: Response, next: NextFunction) {
      res.on('finish', () => {
         return res.json();
      });
      next();
   }
}

export default ResponseHandler;
