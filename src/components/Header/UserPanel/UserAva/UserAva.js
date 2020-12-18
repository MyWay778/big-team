import React from 'react'
import classes from './UserAva.module.css'

const UserAva = props => {
  return (
    <img
      src={props.img}
      className={`${classes.user__ava} ${classes.user__ava_circle}`}
      width="60"
      height="60"
      alt="Фото пользователя"
    />
  )
}

export default UserAva
