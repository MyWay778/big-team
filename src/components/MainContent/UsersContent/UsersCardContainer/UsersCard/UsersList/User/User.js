import React from 'react'

import classes from './User.module.css'
import UserCard from "./UserCard/UserCard";
import Button from "./Button/Button";
import defaultAvaImg from '../../../../../../../static/user.svg'
import {NavLink} from "react-router-dom";
import UserAva from "../../../../../../Header/UserPanelContainer/UserPanel/UserAva/UserAva";


const User = (props) => {
    const UserCardDate = {
        id: props.id,
        name: props.name,
        status: props.status || 'Статуса нет...',
        country: props.country || '-',
        city: props.city|| '-'
    }
    return (
        <li className={classes.user}>
            <div className={classes.leftBlock}>
                <NavLink to={`/profile/${props.id}`}>
                    <UserAva img={props.photos.small || defaultAvaImg} size="80"/>
                </NavLink>
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
