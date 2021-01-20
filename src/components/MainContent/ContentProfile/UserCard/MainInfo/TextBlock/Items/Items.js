import React from 'react'
import Item from './Item/Item'
import classes from './Items.module.css'
import StatusItem from "./StatusItem/StatusItem";

const Items = props => {
    return (
        <div className={classes.items}>
            <StatusItem userStatus={props.userStatus}
                        sendStatus={props.sendStatus}
                        myPage={props.myPage}
            />
            <Item question="О себе" answer={props.aboutMe || "расскажите о себе..."}/>
        </div>
    )
}

export default Items
