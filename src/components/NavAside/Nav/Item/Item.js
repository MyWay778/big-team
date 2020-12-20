import React from 'react'

import s from './Item.module.css'
import {NavLink} from "react-router-dom";

const Item = props => {
  return (
    <li className="item">
      <NavLink to={props.href} activeClassName={s.active}>
        <img src={props.img} className={s.itemImg} alt="icon" />
        {props.title}
      </NavLink>
    </li>
  )
}

export default Item
