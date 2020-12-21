import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'
import userAvaImg from '../../../static/user-ava.jpg'


const Posts = (props) => {
  return (
    <ul className={classes.posts}>
        {
            props.posts.map(message => <Post key={message.id} img={userAvaImg} message={message.message} />)
        }
    </ul>
  )
}

export default Posts
