import React, { Component } from 'react'

import TopicCard from './TopicCard'

import topics from '../data/topics'

class TopicList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics
    }
  }
  
  render() {
    return (
      <div>
        {topics.map(t => 
          <TopicCard topic={t}/>
        )}
      </div>
    )
  }
}

export default TopicList