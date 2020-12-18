import React from 'react'
import Form from './Form/Form'
import classes from './PostsCard.module.css'
import HeaderFour from '../UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour'
import Posts from './Posts/Posts'

const PostsCard = () => {
  return (
    <section className={`${classes.postsCard} ${classes.card}`}>
      <HeaderFour text="Мои новости" />
      <Form />
      <Posts />
    </section>
  )
}

export default PostsCard
