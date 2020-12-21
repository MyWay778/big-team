import React from 'react'

import classes from './Item.module.css'
import {NavLink} from "react-router-dom";

const Item = props => {
    let path = `/messages/${props.id}`
  return (
    <li className={classes.item}>
      <NavLink  to={path}>
        <img src={props.img} width="30" height="30" /> <span>{props.name}</span>
      </NavLink>
    </li>
  )
}

export default Item
