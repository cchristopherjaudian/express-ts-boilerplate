import dotenv from 'dotenv';
import express, { NextFunction, Request, Response, Router } from 'express';
import cors from 'cors';
import { TNormalizedError } from '../lib/handlers/error-handler';

dotenv.config();

type TFuncNotFound = (req: Request, res: Response, next: NextFunction) => void;
type TFuncErrorHandler = (error: TNormalizedError, req: Request, res: Response, next: NextFunction) => void;
type TaddHandler = TFuncNotFound | TFuncErrorHandler;

class ExpressConfig {
   private static instance: ExpressConfig;
   private _app;
   public router: Router;

   private constructor() {
      this._app = express();
      this.router = express.Router();
   }

   public static getInstance(): ExpressConfig {
      if (!ExpressConfig.instance) {
         ExpressConfig.instance = new ExpressConfig();
      }
      return ExpressConfig.instance;
   }

   public expressInit(): this {
      this.initDefaultDeps();
      return this;
   }

   public addApiRoute(basePath: string, route: Router): this {
      this._app.use(basePath, route);
      return this;
   }

   //  initializes default dependencies
   private initDefaultDeps(): this {
      this._app.use(express.json()).use(cors());
      return this;
   }

   public addHandler(fn: TaddHandler): this {
      this._app.use(fn);
      return this;
   }

   public startServer(): void {
      const SERVER_PORT = 6060 || process.env.SERVER_PORT;
      this._app.listen(SERVER_PORT, () => console.log(`server is running on PORT::${SERVER_PORT}`));
   }
}

export default ExpressConfig;
