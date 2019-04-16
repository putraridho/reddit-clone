import React, { useState } from 'react'
import Pagination from 'react-js-pagination'
import injectSheet from 'react-jss'

import TopicCard from './TopicCard'

const style = {
  topicList: {
    '& .pagination': {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'center',
      '& li': {
        lineHeight: '30px',
        width: 30,
        border: '1px solid #ccc',
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
        transition: '.2s all ease-in',
        '&.disabled': {
          pointerEvents: 'none',
          opacity: 0,
          transition: '.2s all ease-out'
        },
        '&.active': {
          pointerEvents: 'none',
          background: '#f2f2f2'
        },
        '& a': {
          textDecoration: 'none',
          color: 'inherit'
        }
      }
    },
  },
  listWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px - 30px'
  },
  list: {
    listStyle: 'none',
    width: `${100 / 3}%`,
    padding: '0 15px',
    marginBottom: 30
  }
}

const TopicList = ({ topics, updateVote, classes }) => {
  // DECLARE STATES WITH REACT HOOK
  const [activePage, setActivePage] = useState(1)

  // SORT THE TOPICS BASED ON VOTE
  topics.sort((a, b) => (a.voteCount > b.voteCount) ? -1 : 1)

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber)
  }

  return (
    <div className={classes.topicList}>
      <ul className={classes.listWrapper}>
        {topics
          // FILTER THE TOPICS, 20 PER PAGE
          .filter((t, i) => {
            const s = (activePage - 1) * 20
            return (i >= s && i < (s + 20))
          })
          .map((t, i) =>
            <li key={i} className={classes.list}>
              <TopicCard topic={t} id={i} _updateVote={updateVote} />
            </li>
          )
        }
      </ul>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={20}
        pageRangeDisplayed={5}
        totalItemsCount={topics.length}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default injectSheet(style)(TopicList)