import baseModel from '../base-model/base-model';

class Author extends baseModel {
  public static tableName = 'authors';

  public id!: string;
  public firstname!: string;
  public authorUniqueReference!: string;
  public middlename?: string;
  public lastname!: string;
  public address!: string;
  public contactNumber!: string;
  public emailAddress?: string;
}

export default Author;
