
import { useDeleteTodo, useTodos, useUpdateTodo } from '../hooks/useTodos'
import { Todo } from '../../server/db/Models/todos'
import { ChangeEvent } from 'react'

function Todos() {
  const { data: todos, isPending, isError } = useTodos()
  const deleteTodo = useDeleteTodo()
  const updateTodo = useUpdateTodo()

  const handleDelete = async (id: number) => {
    try {
      return await deleteTodo.mutateAsync(id)
    } catch (error) {
      console.log(error)
    }
  }

  if (updateTodo.isPending) {
    return
  }
 
  if (isPending) {
    return <p>Loading... Please wait</p>
  } else if (isError) {
    return <p>There was an error</p>
  }

  async function handleChange(evt: ChangeEvent<HTMLInputElement>, id: number) {
      const { checked } = evt.currentTarget
      console.log(checked)
      try {
        await updateTodo.mutateAsync({id, checked})
      } catch (error) {
        console.error(error)
      }

    }

  return (
    <>
      <section className="main">
        <ul className="todo-list">
          <div>
            <div>
                <div style={{display: 'flex'}}>
                <td style={{ fontWeight: '600', flex: 1  }}>
                  <strong>Checkbox</strong>
                </td>
                <td style={{ fontWeight: '600', flex: 1 }}>
                  <strong>Task:</strong>
                </td>
                <td style={{ fontWeight: '600', flex: 1 }}>
                  <strong>Person Name:</strong>
                </td>
                <td style={{ fontWeight: '600', flex: 1 }}>
                  <strong>Resonsibilities</strong>
                </td>
                <td style={{ fontWeight: '600', flex: 1 }}>
                  <strong>Deadline:</strong>
                </td>
                <td style={{ fontWeight: '600', flex: 1 }}>Delete</td>
                </div>
                <label htmlFor='checkboxs'>
              {todos.map((todo: Todo) => {
                return (
                  <div style={{display: 'flex'}} key={todo.id}>
                    <td style={{ flex: 1 }}>
                      <input id='checkboxs' onChange={(evt) => handleChange(evt, todo.id)} type="checkbox" checked={todo.isDone} />
                    </td>
                    <td style={{ flex: 1 }}>{todo.task}</td>
                    <td style={{ flex: 1 }}>{todo.personName}</td>
                    <td style={{ flex: 1 }}>{todo.responsibilities}</td>
                    <td style={{ flex: 1 }}>{todo.deadline}</td>
                    <td style={{ flex: 1 }}>
                      <button onClick={() => handleDelete(todo.id)}>X</button>
                    </td>
                  </div>
                )
              })}
              </label>
            </div>
          </div>
        </ul>
      </section>
    </>
  )
}

export default Todos
