import ExpressConfig from './configs/express';
import ErrorHandler from './lib/handlers/error-handler';

const expressInstance = ExpressConfig.getInstance();

expressInstance
   .expressInit()
   .addErrorHandler(ErrorHandler.notFound)
   .addErrorHandler(ErrorHandler.errorResponse)
   .startServer();
