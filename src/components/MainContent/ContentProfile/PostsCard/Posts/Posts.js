import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'
import userAvaImg from '../../../static/user-ava.jpg'

const Posts = () => {
  return (
    <ul className={classes.posts}>
      <Post img={userAvaImg} message="Всем привет!) Как у вас дела???" />
      <Post img={userAvaImg} message="У меня все ОК!" />
    </ul>
  )
}

export default Posts
