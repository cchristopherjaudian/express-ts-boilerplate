import httpStatus from 'http-status';
import { catchAsync } from '../lib/catch-async';
import { AuthorModel } from '../models';
import { AuthorService } from '../services';
import { TAuthorPayload, TPartialAuthorParams } from '../services/author-service';

class AuthorController extends AuthorService {
   private static instance: AuthorController;

   private constructor() {
      super(AuthorModel);
   }

   public static getInstance(): AuthorController {
      if (!AuthorController.instance) {
         AuthorController.instance = new AuthorController();
      }
      return AuthorController.instance;
   }

   public create = catchAsync(async (req, res) => {
      const newAuthor = await this.createAuthor(req.body as TAuthorPayload);
      res.status(httpStatus.OK).json(newAuthor);
   });

   public findOne = catchAsync(async (req, res) => {
      const author = await this.findAuthor(req.path as TPartialAuthorParams);
      res.status(httpStatus.OK).json(author);
   });

   public authorList = catchAsync(async (req, res) => {
      console.log('xxxxxxxxxxxxxxxxxxxxx');
      const authors = await this.findAll();
      res.status(httpStatus.OK).json(authors);
   });
}

export default AuthorController;
