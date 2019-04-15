import React, { useState } from 'react'

const TopicCard = ({topic}) => 
{
  const [upCount, setUpCount] = useState(topic.upCount)
  const [downCount, setDownCount] = useState(topic.downCount)

  return(
    <div>
      <h1>{topic.title}</h1>
      <p><strong>{topic.community}</strong> posted by <strong>{topic.postedBy}</strong></p>
      <p>{topic.body}</p>
      <button onClick={() => setUpCount(upCount + 1)}>
        upvotes: {upCount}
      </button>
      <button onClick={() => setDownCount(downCount + 1)}>
        downvotes: {downCount}
      </button>
    </div>
  )
}

export default TopicCard