import React from 'react'

import classes from './UsersList.module.css'
import User from "./User/User";


const UsersList = (props) => {
    return (
        <ul className={classes.usersList}>
            <User />
            {/*{*/}
            {/*    props.users.map( user => {*/}
            {/*        return <User />*/}
            {/*    })*/}
            {/*}*/}
        </ul>
    )
}

export default UsersList
