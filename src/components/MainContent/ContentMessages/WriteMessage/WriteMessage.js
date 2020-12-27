import React from 'react'
import classes from './WriteMessage.module.css'

import Form from "../../ContentProfile/PostsCard/Form/Form";
import HeaderFour from "../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";
import {sendMessageCreator, writingMessageCreator} from "../../../../redux/dialogsReducer";

const WriteMessage = (props) => {
    const propertiesFrom = {
        submitText: "Отправить",
        dispatch: props.dispatch,
        newValue: props.newValue,
        actionCreators: {
            change: writingMessageCreator,
            submit: sendMessageCreator
        },
        placeholder: "Написать"
    }
  return (
    <section className={classes.writeMessage}>
      <HeaderFour text="Написать сообщение"/>
      <Form {...propertiesFrom} />
    </section>
  )
}

export default WriteMessage
