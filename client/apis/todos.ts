import request from 'superagent'
import { Todo } from '../../server/db/Models/todos'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getTodos() {
  const response = await request.get(`${rootURL}/todos`)
  return response.body
}

export async function addTodo(newTodo: {
  task: string
  personName: string
  responsibilities: string
  deadline: string
  isDone: boolean
}) {
  console.log(newTodo)
  const result = await request.post(`${rootURL}/todos`).send(newTodo)
  return result.body
}

export async function deleteTodo(id: number) {
  await request.delete(`${rootURL}/todos/${id}`)
  return
}

export async function updateTodo(updateTodo: Todo) {
  return await request.put(`${rootURL}/todos/${updateTodo.id}`).send( updateTodo ).then((res) => res.body.updateTodo)
}
