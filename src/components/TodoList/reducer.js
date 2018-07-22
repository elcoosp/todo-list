import { over, lensPath, merge } from 'ramda'
import * as A from './actions'
const initialState = {
  '46df4gdf': {
    done: true,
    title: 'Sortir le chien',
    id: '46df4gdf',
    body: 'dgjdfkgdfgdgdf',
    tags: ['gfgd', 'gfdgdgd']
  },
  gergeg: {
    done: false,
    title: 'Sortir le chigegegen',
    id: 'gergeg',
    body: 'dgjdfkgdfgdgdf',
    tags: ['gfgd', 'gfdgdgd']
  }
}
const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case A.TOGGLE_TODO_DONE:
      return over(
        lensPath([payload.id]),
        todo => ({ ...todo, ...payload, done: !todo.done }),
        state
      )
    case A.UPDATE_TODO:
      return over(lensPath([payload.id]), merge(payload), state)
    case A.CREATE_TODO:
      return
    case A.DELETE_TODO:
      return
    default:
      return state
  }
}

export default todosReducer
