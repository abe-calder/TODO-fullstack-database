/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'dishes', person_name: 'Nixon',  responsibilities: 'cleaning', deadline: '26-08-27', is_done: false },
    { task: 'wash car', person_name: 'Abe',  responsibilities: 'scrub', deadline: '26-08-28', is_done: false },
    { task: 'brush teeth', person_name: 'David',  responsibilities: 'full one minute', deadline: '26-08-25', is_done: false },
  ])
}
