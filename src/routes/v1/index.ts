import { Router } from 'express';
import authorRoute from './author-routes';
import ExpressConfig from '../../configs/express';

const { router } = ExpressConfig.getInstance();

type TRoute = {
   path: string;
   controller: Router;
};
type TRoutelist = TRoute[];

const defaultRoutes: TRoutelist = [
   {
      path: '/author',
      controller: authorRoute,
   },
];

defaultRoutes.forEach((route) => router.use(route.path, route.controller));

export default router;
