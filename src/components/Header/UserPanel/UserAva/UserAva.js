import React from 'react'
import classes from './UserAva.module.css'

const UserAva = props => {
  let size = props.size || "60"
  return (
    <img
      src={props.img}
      className={`${classes.user__ava} ${classes.user__ava_circle}`}
      width={size}
      height={size}
      alt="Фото пользователя"
    />
  )
}

export default UserAva
