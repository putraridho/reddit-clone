import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import TopicCard from './TopicCard'

class TopicList extends Component {
  componentDidMount = () => {
    this.props.fetchTopic()
  }
  render() {
    const { topics } = this.props 
    return (
      <div>
        <ul>
          {topics.map((t, i) => 
            <li key={i}>
              <TopicCard topic={t}/>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topics: state.topic.items
})

export default connect(mapStateToProps, actions)(TopicList)