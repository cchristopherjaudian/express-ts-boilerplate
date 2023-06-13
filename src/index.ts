import ExpressConfig from './configs/express';
import { ResponseHandler } from './lib/handlers';
import { ErrorHandler } from './lib/handlers';
import AppRoutes from './routes/v1';

const expressInstance = ExpressConfig.getInstance();

expressInstance
   .expressInit()
   .addApiRoute('/v1', AppRoutes)
   // .addHandler(ResponseHandler.responseHandler)
   .addHandler(ErrorHandler.errorResponse)
   .addHandler(ErrorHandler.notFound)
   .startServer();
