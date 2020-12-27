import React from 'react'

import classes from './FriendsList.module.css'
import UserAva from "../../Header/UserPanel/UserAva/UserAva";
import userAva from '../../../static/user.svg'
import HeaderFour from "../../MainContent/ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";

const Friend = props => {
    return (
        <li>
            <UserAva img={userAva} size="35"/> <span>{props.name}</span>
        </li>
    )
}

const FriendsList = (props) => {
    let friends = props.state || []
    return (
        <section className={classes.friendsList}>
            <HeaderFour text="Друзья" />
            <ul>
                {
                    friends.map( friend => <Friend key={friend.id} name={friend.name} />)
                }
            </ul>
        </section>

    )
}

export default FriendsList