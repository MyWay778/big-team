import React from 'react'

import classes from './User.module.css'
import UserAva from "../../../../../../Header/UserPanel/UserAva/UserAva";
import UserCard from "./UserCard/UserCard";
import Button from "./Button/Button";
import defaultAvaImg from '../../../../../../../static/user.svg'


const User = (props) => {
    const UserCardDate = {
        name: props.name,
        status: props.status || 'Статуса нет...',
        country: props.country || '-',
        city: props.city|| '-'
    }
    return (
        <li className={classes.user}>
            <div className={classes.leftBlock}>
                <UserAva img={props.photos.small || defaultAvaImg} size="80"/>
                {props.followed?
                    <Button text="Unfollow" handleOnClick={() => props.handleUnfollow(props.id)}/> :
                    <Button text="Follow" handleOnClick={() => props.handleFollow(props.id)}/>
                }
            </div>
            <UserCard {...UserCardDate} />
        </li>
    )
}

export default User
