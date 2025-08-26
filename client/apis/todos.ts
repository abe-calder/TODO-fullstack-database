import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getTodos() {
  const response = await request.get(`${rootURL}/todos`)
  return response.body
}
