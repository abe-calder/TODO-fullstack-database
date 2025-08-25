import db from './connection'

export async function getAllTodos() {
  return db('todos').select()
}