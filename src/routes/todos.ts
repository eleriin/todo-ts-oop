import { Router } from "express"
import { createTodo, deleteTodos, getTodos, updatedTodos } from '../controllers/todos'

const router = Router()

router.post('/', createTodo)
router.get('/', getTodos)
router.patch('/:id', updatedTodos)
router.delete('/:id', deleteTodos)

export default router