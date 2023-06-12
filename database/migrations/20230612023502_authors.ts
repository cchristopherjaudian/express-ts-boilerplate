import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTableIfNotExists('authors', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('UUID()'));
    table.string('firstname', 100).notNullable();
    table.string('authorUniqueReference', 100).notNullable();
    table.string('middlename', 100).nullable();
    table.string('lastname', 100).notNullable();
    table.string('address', 100).notNullable();
    table.string('contactNumber', 100).notNullable();
    table.string('emailAddress', 100).nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('authors');
}
