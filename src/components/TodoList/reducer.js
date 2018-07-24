import * as R from 'ramda'
import * as A from './actions'

const todosReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case A.TOGGLE_TODO_DONE:
      return R.over(
        R.lensProp(payload.id),
        todo => ({ ...todo, ...payload, done: !todo.done }),
        state
      )
    case A.UPDATE_TODO:
      return R.over(R.lensProp(payload.id), R.merge(R.__, payload), state)
    case A.CREATE_TODO:
      console.log(R.merge(state, { [payload.id]: payload }))

      return R.merge(state, { [payload.id]: payload })
    case A.DELETE_TODO:
      return
    default:
      return state
  }
}

export default todosReducer
