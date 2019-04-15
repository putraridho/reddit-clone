import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const TopicCard = ({topic}) => 
{
  const setVoteCount = (count) => {
    this.props.updateVote(count)
  }

  return(
    <div>
      <h1>{topic.title}</h1>
      <p><strong>{topic.community}</strong> posted by <strong>{topic.postedBy}</strong></p>
      <p>{topic.body}</p>
      <p>Vote Count: {topic.voteCount}</p>
      <button onClick={() => setVoteCount(topic.voteCount + 1)}>
        upvote
      </button>
      <button onClick={() => setVoteCount(topic.voteCount - 1)}>
        downvote
      </button>
    </div>
  )
}

export default connect(null, actions)(TopicCard)