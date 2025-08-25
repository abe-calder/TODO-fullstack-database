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

export async function deleteTodo(id: number) {
    try {
    await db('todos').where({ id }).del()
  } catch (error) {
    console.error(error)
    console.log(error)
  }
}