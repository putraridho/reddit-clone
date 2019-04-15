import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import TopicList from './components/TopicList'
import CreateTopic from './components/CreateTopic'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={TopicList} />
        <Route exact path="/create-topic" component={CreateTopic} />
      </BrowserRouter>
      </div>
    )
  }
}

export default App
