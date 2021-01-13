import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button className={classes.button}
                style={props.style || null}
                onClick={props.handleOnClick}
                disabled={props.disabled}
        >{props.text}</button>
    )
}

export default Button
