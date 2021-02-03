import React from 'react'
import classes from './Post.module.css'
import UserAva from "../../../../../Header/UserPanelContainer/UserPanel/UserAva/UserAva";

const Post = props => {
  return (
    <li className={classes.postItem}>
      <UserAva img={props.img} />
      <span className={classes.postText}>{props.message}</span>
    </li>
  )
}

export default Post
