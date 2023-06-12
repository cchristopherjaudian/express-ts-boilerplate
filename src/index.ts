import ExpressConfig from './configs/express';

const expressInstance = ExpressConfig.getInstance();

expressInstance.expressInit().startServer();
