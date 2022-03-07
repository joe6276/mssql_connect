import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import users from './Reducers/index'


const store = createStore(users, composeWithDevTools(applyMiddleware(thunk)))

export default store;
