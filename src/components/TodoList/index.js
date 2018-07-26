import React from 'react'
import P from 'prop-types'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapToComp } from '../../utils'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { Button } from 'antd'
import Confetti from 'react-dom-confetti'
import { withState, compose } from 'recompose'

const AddTodoButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Link to="/todos/add"> Add a wonderful todo</Link>
  </Button>
)
AddTodoButton.propTypes = {
  onClick: P.func.isRequired
}

const TodoList = ({
  todos,
  match: { url },
  isMakingConfetti,
  shouldMakeConfetti
}) => (
  <section>
    <Switch>
      <Route path={`${url}/add`} component={TodoForm} />
      <Route
        render={() => (
          <AddTodoButton onClick={() => shouldMakeConfetti(true)} />
        )}
      />
    </Switch>
    <Confetti
      active={isMakingConfetti}
      config={{
        angle: 90,
        spread: 234,
        startVelocity: 75,
        elementCount: 97,
        decay: 0.55
      }}
    />
    {mapToComp(todos, TodoItem)}
  </section>
)

TodoList.propTypes = {
  shouldMakeConfetti: P.func.isRequired,
  isMakingConfetti: P.bool,
  todos: P.arrayOf(P.shape(TodoItem.propTypes)).isRequired,
  match: P.shape({
    url: P.string
  })
}

const enhance = compose(
  withState('isMakingConfetti', 'shouldMakeConfetti', false),
  withRouter,
  connect(state => ({
    todos: Object.values(state.todos).sort(
      (a, b) => (a.createdAt > b.createdAt ? 0 : 1)
    )
  }))
)

export default enhance(TodoList)
