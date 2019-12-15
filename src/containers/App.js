import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { PropTypes } from 'prop-types'
import { addTodo, clearTodos } from '../actions/actions.js'

import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <AddTodo
          onAddTodo = {(payload) => this.props.addTodo(payload)}
          onClearTodos = {() => this.props.clearTodos()}
        />
        <TodoList todos={this.props.todos} />
      </div>
    )
  }
}

const mapStateToProps = (states) => {
  return {
    todos: states.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTodo, clearTodos }, dispatch)
}

App.propTypes = {
  addTodo: PropTypes.func.isRequired,
  clearTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
