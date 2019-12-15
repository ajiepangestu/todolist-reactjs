export const ADD_TODO = 'ADD_TODO'
export const CLEAR_TODOS = 'CLEAR_TODOS'

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload
})

export const clearTodos = () => ({
  type: CLEAR_TODOS
})
