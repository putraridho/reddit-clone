import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import injectSheet from 'react-jss'

import { addTopic } from '../actions'

import { Input, TextArea, Select } from './Input'

const form = {
  input: {
    width: 620,
    border: '1px solid #ccc',
    borderRadius: 2
  },
  text: {
    height: 36,
    padding: '0 14px'
  },
  textarea: {
    height: 320,
    padding: '12px 14px'
  },
  select: {
    height: 36,
    width: 210,
    padding: '0 14px'
  },
  submit: {
    height: 40,
    width: 170,
    border: 0,
    borderRadius: 2,
    background: '#ccc',
    transition: '.2s all ease-in-out',
    '&:focus': {
      outline: 0,
      background: '#f2f2f2'
    }
  },
  cell: {
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
    '& > label': {
      display: 'block',
      marginBottom: 10,
      fontSize: 12,
      fontWeight: 'bold'
    }
  }
}

const CreateTopic = props => {
  const [values, setValues] = useState({
    title: '',
    body: '',
    community: 'meme',
    username: 'u/patrick'
  })

  const [redirect, setRedirect] = useState(false)

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

  const { classes } = props

  return (
    <div>
      <div className={classes.cell}>
        <h1>Create A New Post</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className={classes.cell}>
          <label htmlFor="title">Title</label>
          <Input
            className={`${classes.text} ${classes.input}`}
            type="text"
            name="title"
            value={values.title}
            onChange={onChange}
          />
        </div>
        <div className={classes.cell}>
          <label htmlFor="body">Body</label>
          <TextArea
            className={`${classes.textarea} ${classes.input}`}
            name="body"
            value={values.body}
            onChange={onChange}
          />
        </div>
        <div className={classes.cell}>
          <label htmlFor="community">Category</label>
          <Select
            className={`${classes.input} ${classes.select}`}
            name="community"
            value={values.community}
            onChange={onChange}
          >
            <option>Meme</option>
            <option>Programming Language</option>
            <option>Somebodys Subscription</option>
          </Select>
        </div>
        <div className={classes.cell}>
          <button className={classes.submit} type="submit">Submit</button>
        </div>
      </form>
      {renderRedirect()}
    </div>
  )
}

const mapStateToProps = state => ({
  topics: state.topic.items
})

export default injectSheet(form)(connect(mapStateToProps, { addTopic })(CreateTopic))