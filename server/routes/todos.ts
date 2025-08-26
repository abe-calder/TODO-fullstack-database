import * as db from '../db/todos.ts'
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allTodos = await db.getAllTodos()
    res.json(allTodos)
    console.log(allTodos)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong here...')
  }
})

router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    const thingToDo = await db.addTodo(newTodo)
    res.json(thingToDo)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong here...')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const delId = Number(req.params.id)
    await db.deleteTodoById(delId)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  }
})

export default router
