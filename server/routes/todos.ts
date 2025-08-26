import * as db from '../db/todos.ts'
import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  try{ 
    const allTodos = await db.getAllTodos()
    res.json({allTodos})
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong here...')
  }
})