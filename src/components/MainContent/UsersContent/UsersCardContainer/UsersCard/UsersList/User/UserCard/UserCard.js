import React from 'react'

import classes from './UserCard.module.css'


const UserCard = (props) => {
    return (
        <div className={classes.userCard}>
            <section className={`${classes.section} ${classes.section_spaceBetween}`}>
                <span className={classes.name}>
                    {props.name}
                </span>
                <span className={classes.status}>
                    {props.status}
                </span>
            </section>
            <section className={`${classes.section} ${classes.section_alignCenter}`}>
                <span className={classes.country}>
                    {props.country}
                </span>
                <span className={classes.city}>
                    {props.city}
                </span>
            </section>
        </div>
    )
}

export default UserCard
