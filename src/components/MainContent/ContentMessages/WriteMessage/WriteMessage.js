import React from 'react'
import classes from './WriteMessage.module.css'


import HeaderFour from "../../ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";

const WriteMessage = (props) => {
    const handlers = {
        handleChange: (evt) => {props.writingMessage(evt.target.value)},
        handleSubmit: (evt) => {
            evt.preventDefault()
            props.sendMessage()
        }
    }
    return (
        <section className={classes.writeMessage}>
            <HeaderFour text={props.textHeader}/>
            {/*<Form {...props.propertiesForm} {...handlers} />*/}
        </section>
    )
}

export default WriteMessage
