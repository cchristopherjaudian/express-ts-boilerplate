import { v4 as uuidv4 } from 'uuid';
import baseModel from '../base-model/base-model';

class Author extends baseModel {
   public id!: string;
   public firstname!: string;
   public authorUniqueReference!: string;
   public middlename?: string;
   public lastname!: string;
   public address!: string;
   public contactNumber!: string;
   public emailAddress?: string;

   static get tableName() {
      return 'authors';
   }

   static get idColumn() {
      return 'id';
   }

   //  $beforeInsert(): void | Promise<any> {
   //     this.id = uuidv4();
   //  }
}

export default Author;
