import React from 'react'
import classNames from 'classnames/bind';
import s from './Item.module.css'
import {NavLink} from "react-router-dom";

const cx = classNames.bind(s);

const Item = props => {
    const active = props.href !== '#';
  return (
    <li className="item">
      <NavLink to={props.href} activeClassName={cx({active: active, inactive: !active})}>
        <img src={props.img} className={s.itemImg} alt="icon" />
        {props.title}
      </NavLink>
    </li>
  )
}

export default Item
