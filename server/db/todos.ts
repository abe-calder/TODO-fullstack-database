import db from './connection'

export async function getAllTodos() {
  return db('todos').select()
}

export async function addTodo(newTodo: {
  task: string
  person_name: string
  responsibilities: string
  deadline: string
  is_done: boolean
}) {
  try {
    await db('todos').insert(newTodo).returning('*')
  } catch (error) {
    console.error(error)
    console.log(error)
  }
}
