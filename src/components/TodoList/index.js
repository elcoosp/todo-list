import React from 'react'
import P from 'prop-types'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapToComp } from '../../utils'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const AddTodo = () => <Link to="/todos/add"> Add a wonderful todo</Link>
const TodoList = ({ todos, match: { url } }) => {
  return (
    <section>
      <Switch>
        <Route path={`${url}/add`} component={TodoForm} />
        <Route component={AddTodo} />
      </Switch>
      {mapToComp(todos, TodoItem)}
    </section>
  )
}

TodoList.propTypes = {
  todos: P.arrayOf(P.shape(TodoItem.propTypes)).isRequired,
  match: P.shape({
    url: P.string
  })
}

export default withRouter(
  connect(state => ({
    todos: Object.values(state.todos).sort(
      (a, b) => (a.createdAt > b.createdAt ? 0 : 1)
    )
  }))(TodoList)
)
