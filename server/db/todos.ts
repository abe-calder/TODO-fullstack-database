import db from './connection'
import { Todos } from './Models/todos'

export async function getAllTodos(): Promise<Todos[]> {
  return db('todos').select(
    'id',
    'task',
    'person_name as personName',
    'responsibilities',
    'deadline',
    'is_done as isDone',
  )
}

export async function addTodo(newTodo: Todos) {
  try {
    await db('todos').insert(newTodo).returning('*')
  } catch (error) {
    console.error(error)
    console.log(error)
  }
}

export async function deleteTodoById(id: number) {
  try {
    await db('todos').where({ id }).del()
  } catch (error) {
    console.error(error)
    console.log(error)
  }
}
