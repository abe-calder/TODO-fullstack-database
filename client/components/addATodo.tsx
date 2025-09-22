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
    console.log(inputState)
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
    console.log(value, name)
    setInputState((prev) => ({ ...prev, [name]: value }))
  }

  function handleChange2(evt: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = evt.currentTarget
    console.log(checked, name)
    setInputState((prev) => ({ ...prev, [name]: checked }))
  }

  return (
    <>
      <form style={{display: 'flex'}} onSubmit={handleSubmit}>
        <div style={{ fontWeight: '600', flex: 1 }}>
        <label  className="input-to" htmlFor='isDone'>Is it done?</label>
        <input style={{}}
          className="input-to"
          name="isDone"
          id="isDone"
          type="checkbox"
          checked={inputState.isDone}
          onChange={handleChange2}
        />
        </div>
        <div style={{ fontWeight: '600', flex: 1 }}>
        <label  className="input-to" htmlFor='task'>Task</label>
        <input
          className="input-to"
          name="task"
          id="task"
          value={inputState.task}
          onChange={handleChange}
        />
        </div>
        <div style={{ fontWeight: '600', flex: 1 }}>
          <label  className="input-to" htmlFor='personName'>Person Name</label>
        <input
          className="input-to"
          name="personName"
          id="personName"
          value={inputState.personName}
          onChange={handleChange}
        />
        </div>
          <div style={{ fontWeight: '600', flex: 1 }}>
          <label  className="input-to" htmlFor='responsibilities'>Responsibilities</label>
        <input
          className="input-to"
          name="responsibilities"
          id="responsibilities"
          value={inputState.responsibilities}
          onChange={handleChange}
        />
        </div>  
        <div style={{ fontWeight: '600', flex: 1 }}>
        <label  className="input-to" htmlFor='deadline'>Deadline</label>
        <input
          className="input-to"
          name="deadline"
          id="deadline"
          value={inputState.deadline}
          onChange={handleChange}
        />
        </div>
          <div style={{ fontWeight: '600', flex: 1 }}>
        <button
          style={{transform: 'translate(30px ,20px)', border: '1px solid black'}}
          data-pending={addTodo.isPending}
        >
          Submit
        </button>
        </div>
      </form>
    </>
  )
}

export default AddATodo
