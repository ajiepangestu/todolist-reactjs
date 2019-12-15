import { combineReducers } from 'redux'
import { ADD_TODO, CLEAR_TODOS } from '../actions/actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ]
    case CLEAR_TODOS:
      return []
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
