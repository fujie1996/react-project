import { createStore } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

const middleware = rocess.env.NODE_ENV === 'development'? composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk)

export default createStore(reducers, middleware)