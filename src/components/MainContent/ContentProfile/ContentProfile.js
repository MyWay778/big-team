import React from 'react'

import classes from './ContentProfile.module.css'
import UserCard from './UserCard/UserCard'
import AdditionCard from './AdditionCard/AdditionCard'
import PostsCard from './PostsCard/PostsCard'

const ContentProfile = (props) => {
  return (
    <div className={classes.contentProfile}>
      <UserCard />
      <AdditionCard />
      <PostsCard postsData={props.postsData} dispatch={props.dispatch}/>
    </div>
  )
}

export default ContentProfile
