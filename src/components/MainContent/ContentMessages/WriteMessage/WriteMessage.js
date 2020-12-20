import React from 'react'
import classes from './WriteMessage.module.css'

import Form from "../../ContentProfile/PostsCard/Form/Form";
import HeaderFour from "../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";

const WriteMessage = () => {
  return (
    <section className={classes.writeMessage}>
      <HeaderFour text="Написать сообщение"/>
      <Form submitText="Отправить"/>
    </section>
  )
}

export default WriteMessage
