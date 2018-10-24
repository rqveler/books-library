import { combineReducers } from 'redux'
import messages from '../messages'
import books   from './books'
import locale from './locale'
import searchTerm from './searchTerm'

const rootReducer = combineReducers({locale, searchTerm, books});

export default rootReducer
