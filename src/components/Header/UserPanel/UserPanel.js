import React from 'react'
import Greeting from './Greeting/Greeting'
import UserAva from './UserAva/UserAva'
import classes from './UserPanel.module.css'

import UserAvaImg from '../static/user-ava.jpg'

const UserPanel = () => {
  return (
    <div className={classes.userPanel}>
      <Greeting name="Джек" />
      <UserAva img={UserAvaImg} />
    </div>
  )
}

export default UserPanel
