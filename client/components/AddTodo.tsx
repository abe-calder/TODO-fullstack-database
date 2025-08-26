import { useState } from 'react'
import { useAddTodo, useTodos } from '../hooks/useTodos'
function AddTodo() {
  // const addTodo = useAddTodo()
  const { data: todos, isPending, isError, error } = useTodos()
  const addTodo = useAddTodo()
  const [isChecked, setIsChecked] = useState(false)
  const [todoState, setTodoState] = useState()

  if (isPending) {
    return <p>Loading... Please wait</p>
  } else if (isError) {
    return <p>There was an error</p>
  }

  async function handleSubmit(evt) {
    evt.preventDefault()

    if (addTodo.isPending) {
      return
    }

    const data = {
      task: task,
      person_name: personName,
      responsibilities: responsibilities,
      deadline: deadline,
      is_done: isDone,
    }

    const newLog = await addALog.mutateAsync(data)
    console.log('add a log', newLog)
    setFormState(empty)
  }

  return (
    <>
      <input className="new-todo" placeholder="What needs to be done?" />
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <div>
            <table className="table">
              <td style={{ fontWeight: '600' }}>
                <strong>Checkbox</strong>
              </td>
              <td style={{ fontWeight: '600' }}>
                <strong>Task:</strong>
              </td>
              <td style={{ fontWeight: '600' }}>
                <strong>Person Name:</strong>
              </td>
              <td style={{ fontWeight: '600' }}>
                <strong>Resonsibilities</strong>
              </td>
              <td style={{ fontWeight: '600' }}>
                <strong>Deadline:</strong>
              </td>
              {todos.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{todo.task}</td>
                    <td>{todo.person_name}</td>
                    <td>{todo.responsibilities}</td>
                    <td>{todo.deadline}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </ul>
      </section>
    </>
  )
}

export default AddTodo
