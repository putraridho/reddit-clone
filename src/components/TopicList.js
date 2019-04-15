import React from 'react'

import TopicCard from './TopicCard'

const TopicList = props => {
  const { topics, updateVote } = props
  return (
    <div>
      <ul>
        {topics.map((t, i) => 
          <li key={i}>
            <TopicCard topic={t} id={i} _updateVote={updateVote}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default TopicList