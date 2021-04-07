import React from 'react'
import Greeting from './Greeting/Greeting'
import UserAva from './UserAva/UserAva'
import classes from './UserPanel.module.css'

import UserAvaDefault from '../../../../static/user.svg'
import {NavLink} from "react-router-dom";

const UserPanel = props => {
    return (
        <div className={classes.userPanel}>
            {props.isAuth ?
                    [<Greeting key={0} name={props.name}/>,
                    <UserAva key={1} img={props.userAva || UserAvaDefault}/>,
                    <button className={classes.logout} key={2} onClick={props.signOut}/>] :
                <NavLink to="/login" activeClassName={classes.active}>Войти</NavLink>
            }
        </div>
    )
}

export default UserPanel
