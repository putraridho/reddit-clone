import React from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'

const styles = {
  nav: {
    display: 'flex',
    padding: '10px 15px'
  },
  link: {
    padding: '15px 20px',
    marginLeft: 10,
    marginRight: 10,
    textDecoration: 'none',
    color: 'inherit',
    background: '#f2f2f2',
    borderRadius: 4,
    boxShadow: '0 3px 6px rgba(33,33,33,.16)',
    transition: '.2s all ease-in-out',
    '&.is-active': {
      background: 'transparent',
      boxShadow: '0 0 0 transparent',
      cursor: 'default'
    }
  }
}

const Header = props => {
  const { classes } = props
  return (
    <nav className={classes.nav}>
      <NavLink exact activeClassName='is-active' className={classes.link} to='/'>
        Topic List
      </NavLink>
      <NavLink activeClassName='is-active' className={classes.link} to='/create-topic'>
        Create a New Topic
      </NavLink>
    </nav>
  )
}

export default injectSheet(styles)(Header)