import { ChangeEvent, FormEvent, useState } from 'react'
import { useAddTodo } from '../hooks/useTodos'
import { postTodo } from '../../server/db/Models/todos'

const empty = {
  id: '',
  task: '',
  personName: '',
  responsibilities: '',
  deadline: '',
  isDone: false,
} as unknown as postTodo

function AddATodo() {
  const addTodo = useAddTodo()

  const [inputState, setInputState] = useState(empty)

  async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    if (addTodo.isPending) {
      return
    }

    const data = {
      task: inputState.task,
      personName: inputState.personName,
      responsibilities: inputState.responsibilities,
      deadline: inputState.deadline,
      isDone: inputState.isDone,
    }

    const newTodo = await addTodo.mutateAsync(data)
    console.log(newTodo)
    setInputState(empty)
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.currentTarget

    setInputState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input-to"
          name="isDone"
          id="isDone"
          type="checkbox"
          checked={inputState.isDone}
          value={inputState.isDone}
          onChange={handleChange}
        />
        <input
          className="input-to"
          name="task"
          id="task"
          value={inputState.task}
          onChange={handleChange}
        />
        <input
          className="input-to"
          name="personName"
          id="personName"
          value={inputState.personName}
          onChange={handleChange}
        />
        <input
          className="input-to"
          name="responsibilities"
          id="responsibilities"
          value={inputState.responsibilities}
          onChange={handleChange}
        />
        <input
          className="input-to"
          name="deadline"
          id="deadline"
          value={inputState.deadline}
          onChange={handleChange}
        />
        <button
          style={{ transform: 'translateX(30px)' }}
          data-pending={addTodo.isPending}
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default AddATodo
