import { NotFoundError, ResourceConflictError } from '../lib/custom-errors/class-errors';
import type { AuthorModel } from '../models';

export type TAuthorPayload = {
   id: string;
   firstname: string;
   authorUniqueReference: string;
   middlename?: string;
   lastname: string;
   address: string;
   contactNumber: string;
   emailAddress?: string;
};
export type TPartialAuthor = Partial<Pick<TAuthorPayload, 'emailAddress' | 'contactNumber' | 'authorUniqueReference'>>;

class AuthorService {
   private _model;

   constructor(model: typeof AuthorModel) {
      this._model = model;
   }

   public async createAuthor(payload: TAuthorPayload): Promise<AuthorModel | unknown> {
      try {
         const hasData = await this._model
            .query()
            .where((query) => {
               if (payload?.emailAddress) {
                  return query.where('emailAddress', payload.emailAddress);
               }
               if (payload?.contactNumber) {
                  return query.where('contactNumber', payload.contactNumber);
               }
               if (payload?.authorUniqueReference) {
                  return query.where('authorUniqueReference', payload.authorUniqueReference);
               }
            })
            .first();

         if (hasData) {
            throw new ResourceConflictError('Author already exists.');
         }

         const newAuthor = await this._model.query().insertAndFetch(payload);
         return newAuthor;
      } catch (error) {
         throw error;
      }
   }

   public async findAuthor(query: TPartialAuthor): Promise<AuthorModel | unknown> {
      try {
         const newAuthor = await this._model.query().findOne({ ...query });
         if (!newAuthor) {
            throw new NotFoundError('Author not found.');
         }
         return newAuthor;
      } catch (error) {
         throw error;
      }
   }

   public async findAll(): Promise<AuthorModel[]> {
      try {
         const newAuthor = await this._model.query();
         return newAuthor;
      } catch (error) {
         throw error;
      }
   }
}

export default AuthorService;
