import React from 'react'
import classes from './PostsCard.module.css'
import HeaderFour from '../UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour'
import Posts from './Posts/Posts'
import PostForm from "./PostForm/PostForm";


const PostsCard = (props) => {

  return (
    <section className={`${classes.postsCard} ${classes.card}`}>
      <HeaderFour text={props.textHeader} />
      <PostForm handleSubmit={props.handleSubmit} />
      <Posts posts={props.posts}/>
    </section>
  )
}

export default PostsCard
