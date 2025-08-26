export interface Todos {
  task: string
  personName: string
  responsibilities: string
  deadline: string
  isDone: boolean
}

export interface Todo extends Todos {
  id: number
}

export interface postTodo {
  id: number
  task: string
  personName: string
  responsibilities: string
  deadline: string
  isDone: boolean
}
