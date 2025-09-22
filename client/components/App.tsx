import AddATodo from './addATodo.tsx'
import Todos from './Todos.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddATodo />
        <Todos />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
