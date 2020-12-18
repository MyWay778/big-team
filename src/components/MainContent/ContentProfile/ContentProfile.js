import React from 'react'

import classes from './ContentProfile.module.css'
import UserCard from './UserCard/UserCard'
import AdditionCard from './AdditionCard/AdditionCard'
import PostsCard from './PostsCard/PostsCard'

const ContentProfile = () => {
  return (
    <div className={classes.contentProfile}>
      <UserCard />
      <AdditionCard />
      <PostsCard />
    </div>
  )
}

export default ContentProfile
