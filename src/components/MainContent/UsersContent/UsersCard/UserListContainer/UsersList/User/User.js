import React from 'react'

import classes from './User.module.css'
import UserAva from "../../../../../../Header/UserPanel/UserAva/UserAva";
import UserCard from "./UserCard/UserCard";
import Button from "./Button/Button";
import defaultAvaImg from '../../../../../../../static/user.svg'


const User = (props) => {
    return (
        <li className={classes.user}>
            <div className={classes.leftBlock}>
                <UserAva img={props.userPhoto || defaultAvaImg} size="80"/>
                <Button text="Follow"/>
            </div>
            <UserCard />
        </li>
    )
}

export default User
