import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer'
import * as thunk from 'redux-thunk'
const store = createStore(reducer,applyMiddleware(thunk))
export default store