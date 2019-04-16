import React from 'react'
import injectSheet from 'react-jss'

import TopicCard from './TopicCard'

const style = {
  listWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px - 30px'
  },
  list: {
    listStyle: 'none',
    width: `${100/3}%`,
    padding: '0 15px',
    marginBottom: 30
  }
}

const TopicList = ({ topics, updateVote, classes }) => {
  topics.sort((a, b) => (a.voteCount > b.voteCount) ? -1 : 1)

  const top = topics.filter((t, i) => i < 20)
  return (
    <div>
      <ul className={classes.listWrapper}>
        {top.map((t, i) => 
          <li key={i} className={classes.list}>
            <TopicCard topic={t} id={i} _updateVote={updateVote}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default injectSheet(style)(TopicList)