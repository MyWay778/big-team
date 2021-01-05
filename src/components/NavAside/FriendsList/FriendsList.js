import React from 'react'

import classes from './FriendsList.module.css'
import UserAva from "../../Header/UserPanelContainer/UserPanel/UserAva/UserAva";

import HeaderFour from "../../MainContent/ContentProfile/UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";

const Friend = props => {
    return (
        <li>
            <UserAva img={props.img} size="35"/> <span>{props.name}</span>
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
                    friends.map( friend => <Friend key={friend.id} name={friend.name} img={props.img} />)
                }
            </ul>
        </section>

    )
}

export default FriendsList