import React from 'react'
import classes from './WriteMessage.module.css'

import Form from "../../ContentProfile/PostsCard/Form/Form";
import HeaderFour from "../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";

const WriteMessage = (props) => {

    return (
        <section className={classes.writeMessage}>
            <HeaderFour text={props.textHeader}/>
            <Form {...props.propertiesForm} {...props.handlers} />
        </section>
    )
}

export default WriteMessage
