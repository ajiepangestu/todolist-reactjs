import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, i) => <Todo key = {i} item = {todo} />)}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array
}

export default TodoList
