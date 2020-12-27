import React from 'react'
import Form from './Form/Form'
import classes from './PostsCard.module.css'
import HeaderFour from '../UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour'
import Posts from './Posts/Posts'
import {addPostActionCreator, writingPostActionCreator} from "../../../../redux/postsReducer";

const PostsCard = (props) => {
    const propertiesFrom = {
        submitText: "Поделиться",
        dispatch: props.dispatch,
        newValue: props.postsData.newPostValue,
        actionCreators: {
            change: writingPostActionCreator,
            submit: addPostActionCreator
        },
        placeholder: "Что нового?"
    }
  return (
    <section className={`${classes.postsCard} ${classes.card}`}>
      <HeaderFour text="Мои новости" />
      <Form {...propertiesFrom} />
      <Posts posts={props.postsData.posts}/>
    </section>
  )
}

export default PostsCard
