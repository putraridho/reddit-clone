import { FETCH_TOPIC, UPDATE_VOTE } from '../actions/types'
import update from 'react-addons-update'

const initialstate = {
  items: [],
  counter: 0,
  target: null
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_TOPIC:{
      return {
        ...state,
        items: action.payload
      }}
    case UPDATE_VOTE:
      return update(state, {
        items: {
          [action.id]: {
            voteCount: {$set: action.payload}
          }
        }
      })
      
    default:
      return state
  }
}