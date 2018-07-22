import { makeAction } from '../../utils'
export const UPDATE_TODO = 'UPDATE_TODO'
export const CREATE_TODO = 'CREATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE'

const withDate = key => () => ({
  updatedAt: Date.now()
})
const withUpdatedAt = withDate('updatedAt')

export const actionCreators = {
  toggleTodoDone: makeAction(TOGGLE_TODO_DONE, withUpdatedAt),
  updateTodo: makeAction(UPDATE_TODO, withUpdatedAt),
  createTodo: makeAction(CREATE_TODO, withDate('createdAt'))
}
