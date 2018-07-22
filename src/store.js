import { createStore, combineReducers } from '../node_modules/redux'
import todos from './components/TodoList/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(combineReducers({ todos }), composeWithDevTools())
export default store
