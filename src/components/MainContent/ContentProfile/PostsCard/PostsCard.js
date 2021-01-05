import React from 'react'
import Form from './Form/Form'
import classes from './PostsCard.module.css'
import HeaderFour from '../UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour'
import Posts from './Posts/Posts'


const PostsCard = (props) => {
    const handlers ={
        handleChange: (evt) => {props.writingPost(evt.target.value)},
        handleSubmit: (evt) => {
            evt.preventDefault()
            props.addPost()
        }
    }
  return (
    <section className={`${classes.postsCard} ${classes.card}`}>
      <HeaderFour text={props.textHeader} />
      <Form {...props.propertiesForm} {...handlers}/>
      <Posts posts={props.state}/>
    </section>
  )
}

export default PostsCard
