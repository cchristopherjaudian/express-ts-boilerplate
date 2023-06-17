import httpStatus from 'http-status';
import { catchAsync } from '../lib/catch-async';
import { AuthorModel } from '../models';
import { AuthorService } from '../services';
import { TAuthorPayload, TPartialAuthorParams } from '../services/author-service';

class AuthorController extends AuthorService {}

export default AuthorController;
