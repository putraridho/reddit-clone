import React from 'react'

const TopicCard = ({topic, id, _updateVote}) => 
{
  const setVoteCount = (count, id) => {
    _updateVote(count, id)
  }

  return(
    <div>
      <h4>{topic.id}</h4>
      <h1>{topic.title}</h1>
      <p><strong>{topic.community}</strong> posted by <strong>{topic.postedBy}</strong></p>
      <p>{topic.body}</p>
      <p>Vote Count: {topic.voteCount}</p>
      <button onClick={() => setVoteCount(topic.voteCount + 1, id)}>
        upvote
      </button>
      <button onClick={() => setVoteCount(topic.voteCount - 1, id)}>
        downvote
      </button>
    </div>
  )
}

export default TopicCard