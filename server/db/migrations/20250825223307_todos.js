/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('task')
    table.string('person_name')
    table.string('responsibilities')
    table.string('deadline')
    table.boolean('is_done')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('todos')
}
