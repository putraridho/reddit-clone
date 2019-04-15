import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to='/'>
        Topic List
      </Link>
      <Link to='/create-topic'>
        Create a New Topic
      </Link>
    </nav>
  ) 
}

export default Header