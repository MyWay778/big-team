import React from 'react'

import classes from './Item.module.css'

const Item = props => {
  return (
    <li className={classes.item}>
      <a href="#">
        <img src={props.img} width="30" height="30" /> <span>{props.name}</span>
      </a>
    </li>
  )
}

export default Item
