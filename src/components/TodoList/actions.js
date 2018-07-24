import uuid from 'uuid'
import { makeAction, withFuncForKey } from '../../utils'
export const UPDATE_TODO = 'UPDATE_TODO'
export const CREATE_TODO = 'CREATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE'

// Helpers to enhance the payload of actions
const withId = withFuncForKey('id', uuid.v4)
const withUpdatedAt = withFuncForKey('updatedAt', Date.now)

export const actionCreators = {
  toggleTodoDone: makeAction(TOGGLE_TODO_DONE, withUpdatedAt),
  updateTodo: makeAction(UPDATE_TODO, withUpdatedAt),
  createTodo: makeAction(
    CREATE_TODO,
    withFuncForKey('createdAt', Date.now),
    withId
  )
}
