import { useDeleteTodo, useTodos } from '../hooks/useTodos'

function Todos() {
  const { data: todos, isPending, isError } = useTodos()
  const deleteTodo = useDeleteTodo()

  const handleDelete = async (id: number) => {
    try {
      return await deleteTodo.mutateAsync(id)
    } catch (error) {
      console.log(error)
    }
  }

  if (isPending) {
    return <p>Loading... Please wait</p>
  } else if (isError) {
    return <p>There was an error</p>
  }

  return (
    <>
      <section className="main">
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
              <td>Delete</td>
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
                    <td>
                      <button onClick={() => handleDelete(todo.id)}>X</button>
                    </td>
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

export default Todos
