import React from 'react'

import classes from './UsersList.module.css'
import User from "./User/User";


const UsersList = (props) => {
    return (
        <ul className={classes.usersList}>
            {
                props.users.map( user => {
                    return <User key={user.id} {...user} {...props.handlers} />
                })
            }
        </ul>
    )
}

export default UsersList
