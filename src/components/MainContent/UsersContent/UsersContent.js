import React from 'react'

import classes from './UsersContent.module.css'
import UsersCardContainer from "./UsersCardContainer/UsersCardContainer";


const UsersContent = () => {
  return (
    <div className={classes.usersContent}>
        <UsersCardContainer />
    </div>
  )
}

export default UsersContent
