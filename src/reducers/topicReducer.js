import { FETCH_TOPIC, UPDATE_VOTE } from '../actions/types'

const initialstate = {
  items: []
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_TOPIC:
      return {
        ...state,
        items: action.payload
      }
    case UPDATE_VOTE:
      return {
        ...state,
        
      }
    default:
      return state
  }
}