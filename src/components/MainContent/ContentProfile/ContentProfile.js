import React from 'react'

import classes from './ContentProfile.module.css'
import UserCard from './UserCard/UserCard'
import AdditionCard from './AdditionCard/AdditionCard'
import PostsCardContainer from "./PostsCard/PostsCardContainer";

const ContentProfile = () => {
  return (
    <div className={classes.contentProfile}>
      <UserCard />
      <AdditionCard />
      <PostsCardContainer />
    </div>
  )
}

export default ContentProfile
