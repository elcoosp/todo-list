import React from 'react'
import P from 'prop-types'

import { connect } from 'react-redux'
import { mapToComp } from '../../utils'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => <section>{mapToComp(todos, TodoItem)}</section>
TodoList.propTypes = {
  todos: P.arrayOf(P.shape(TodoItem.propTypes)).isRequired
}

export default connect(state => {
  console.log(state)

  return {
    todos: Object.values(state.todos)
  }
})(TodoList)
