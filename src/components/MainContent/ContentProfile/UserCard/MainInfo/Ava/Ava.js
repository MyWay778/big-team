import React from 'react'
import classes from './Ava.module.css'

const Ava = props => {
  return (
    <img
      src={props.img}
      className={`${classes.ava} ${classes.ava__card} ${classes.ava_float}`}
      width="135"
      height="110"
      alt="Фото пользователя"
    />
  )
}

export default Ava
