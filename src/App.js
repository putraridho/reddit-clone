import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

import Header from './components/Header'
import TopicList from './components/TopicList'
import CreateTopic from './components/CreateTopic'

class App extends Component {
  componentDidMount = () => {
    this.props.fetchTopic()
  }

  render() {
    const {
      topics,
      updateVote
    } = this.props
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route
            exact
            path="/"
            render={props => <TopicList {...props} topics={topics} updateVote={updateVote} />}
          />
          <Route
            exact
            path="/create-topic"
            component={CreateTopic}
          />
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topics: state.topic.items
})

export default connect(mapStateToProps, actions)(App)
