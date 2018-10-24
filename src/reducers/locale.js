import { CHANGE_LOCALE } from '../actions'

const DEFAULT_STATE = 'he' 
  
const locale = (state = DEFAULT_STATE, action) => {
  switch (action.type) {    
    case CHANGE_LOCALE:
      return action.locale
    default:
      return state
  }
}

export default locale
