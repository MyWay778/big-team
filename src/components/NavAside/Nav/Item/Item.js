import React from 'react'

import s from './Item.module.css'

const Item = props => {
  return (
    <li className="item">
      <a href={props.href}>
        <img src={props.img} className={s.itemImg} alt="icon" />
        {props.title}
      </a>
    </li>
  )
}

export default Item
