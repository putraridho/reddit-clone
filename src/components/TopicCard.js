import React from 'react'
import injectSheet from 'react-jss'

const style = {
  card: {
    padding: 30,
    border: '1px solid #ccc',
    borderRadius: 10,
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 30,
    marginTop: 0
  },
  category: {
    marginTop: 0,
    '& > strong': {
      color: '#333',
      fontWeight: "500",
    }
  },
  body: {
    marginTop: 0,
    marginBottom: 30,
    lineHeight: '27px'
  }
}

const TopicCard = ({topic, id, _updateVote, classes}) => {
  const setVoteCount = (count, id) => {
    _updateVote(count, id)
  }

  return(
    <div className={classes.card}>
      <p className={classes.category}><strong>{topic.community}</strong> posted by <strong>{topic.postedBy}</strong></p>
      <h1 className={classes.title}>{topic.title}</h1>
      <p className={classes.body}>{topic.body}</p>

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

export default injectSheet(style)(TopicCard)