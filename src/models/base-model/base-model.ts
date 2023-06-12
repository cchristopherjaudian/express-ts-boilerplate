import { Model } from 'objection';
import { Knex } from 'knex';
import knexfile from '../../../knexfile';

Model.knex(knexfile.development as Knex<any, any[]>);

export default Model;
