import db from './connection'
import { Todos } from './Models/todos'

export async function getAllTodos() {
  return db('todos').select()
}

export async function addTodo(newTodo: Todos) {
  try {
    await db('todos')
      .insert({
        task: newTodo.task,
        person_name: newTodo.personName,
        responsibilities: newTodo.responsibilities,
        deadline: newTodo.deadline,
        is_done: newTodo.isDone,
      })
      .returning('*')
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
