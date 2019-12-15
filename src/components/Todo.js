import React from 'react'
import PropTypes from 'prop-types'

const Todo = (props) => {
  return (
    <li>
      {props.item}
    </li>
  )
}

Todo.propTypes = {
  item: PropTypes.string
}

export default Todo
