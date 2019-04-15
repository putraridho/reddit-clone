import { FETCH_TOPIC, ADD_TOPIC, UPDATE_VOTE } from './types'
import topics from '../data/topics' 

export const fetchTopic = () => dispatch => {
  dispatch({
    type: FETCH_TOPIC,
    payload: topics
  })
}

export const addTopic = topic => dispatch => {
  dispatch({
    type: ADD_TOPIC,
    payload: topic
  })
}

export const updateVote = (count, id) => dispatch => {
  dispatch({
    type: UPDATE_VOTE,
    payload: count,
    id
  })
}