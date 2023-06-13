import { Model } from 'objection';
import knex from 'knex';
import knexfile from '../../../knexfile';

Model.knex(knex(knexfile.development));

export default Model;
