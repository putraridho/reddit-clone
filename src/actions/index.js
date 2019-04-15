import { FETCH_TOPIC, UPDATE_VOTE } from './types'
import topics from '../data/topics' 

export const fetchTopic = () => dispatch => {
  dispatch({
    type: FETCH_TOPIC,
    payload: topics
  })
}

export const updateVote = (count, id) => dispatch => {
  dispatch({
    type: UPDATE_VOTE,
    id,
    payload: count
  })
}