import { Router } from "express"
import { createTodo, getTodos, updatedTodos } from '../controllers/todos'

const router = Router()

router.post('/', createTodo)
router.get('/', getTodos)
router.patch('/:id', updatedTodos)
router.delete('/:id')

export default router