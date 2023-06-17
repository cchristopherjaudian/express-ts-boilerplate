import AppSource, { IAppSource } from '../database/db-connection';
import { NotFoundError, ResourceConflictError } from '../lib/custom-errors/class-errors';

export type TAuthorPayload = {
   id: string;
   name: string;
   authorUniqueReference: string;
   address: string;
   contactNumber: string;
   emailAddress?: string;
};

class AuthorService {
   private _appSource: IAppSource;

   constructor(AppSource: IAppSource) {
      this._appSource = AppSource.i;
   }
}

export default AuthorService;
