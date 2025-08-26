import request from 'superagent'

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
  const result = await request.post(`${rootURL}/todos`).send(newTodo)
  return result.body
}

export async function deleteTodo(id: number) {
  await request.delete(`${rootURL}/todos/${id}`)
  return
}