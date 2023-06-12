import { catchAsync } from '../lib/catch-async';
import { AuthorModel } from '../models';
import { AuthorService } from '../services';
import { TAuthorPayload } from '../services/author-service';

const authorInstance = new AuthorService(AuthorModel);

const createAuthor = catchAsync(async (req, res) => {
   const newAuthor = await authorInstance.createAuthor(req.body as TAuthorPayload);
});

export { createAuthor };
