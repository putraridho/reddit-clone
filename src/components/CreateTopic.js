import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { addTopic } from '../actions'

import { Input, TextArea, Select } from './Input'

const CreateTopic = props => {
  const [ values, setValues] = useState({
    title: '', 
    body: '', 
    community: 'meme',
    username: 'u/patrick'
  })

  const [ redirect, setRedirect ] = useState(false)

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const newTopic = {
      title: values.title,
      body: values.body,
      community: `r/${values.community.split(' ').join('')}`,
      postedBy: values.username,
      voteCount: 0
    }
    
    props.addTopic(newTopic)
    setRedirect(true)
  }

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/" />
    }
  }
  
  return (
    <div>
      <h1>Create A New Post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            type="text"
            name="title"
            value={values.title}
            onChange={onChange}
          />
        </div>
        <div>
          <TextArea
            name="body"
            value={values.body}
            onChange={onChange}
          />
        </div>
        <div>
          <Select
            name="community"
            value={values.community}
            onChange={onChange}
          >
            <option>Meme</option>
            <option>Programming Language</option>
            <option>Somebodys Subscription</option>
          </Select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {renderRedirect()}
    </div>
  )
}

const mapStateToProps = state => ({
  topics: state.topic.items
})

export default connect(mapStateToProps, { addTopic })(CreateTopic)