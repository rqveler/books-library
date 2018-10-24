import { SET_SEARCH_TERM,          
       } from '../actions'



const DEFAULT_STATE = ''
  
const searchTerm = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.searchTerm    
    default:
      return state
  }
}

export default searchTerm
