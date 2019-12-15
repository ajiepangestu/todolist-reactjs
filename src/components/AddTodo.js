import React from 'react'
import PropType from 'prop-types'

const AddTodo = (props) => {
  const todoInput = React.createRef()

  const addTodo = () => {
    props.onAddTodo(todoInput.current.value)
    todoInput.current.value = ''
  }

  const clearTodo = () => {
    props.onClearTodos()
  }

  return (
    <div>
      <input type='text' ref={todoInput} />
      <button onClick = {addTodo}>Add</button>
      <button onClick = {clearTodo}>Clear</button>
    </div>
  )
}

AddTodo.propTypes = {
  onAddTodo: PropType.func.isRequired,
  onClearTodos: PropType.func.isRequired
}

export default AddTodo
