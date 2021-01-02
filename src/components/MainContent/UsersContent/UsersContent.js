import React from 'react'

import classes from './UsersContent.module.css'
import UsersCard from "./UsersCard/UsersCard";


const UsersContent = () => {
  return (
    <div className={classes.usersContent}>
        <UsersCard />
    </div>
  )
}

export default UsersContent
