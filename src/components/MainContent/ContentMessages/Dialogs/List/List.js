import React from 'react'
import Item from './item/Item'

import contactImg from '../../static/user.svg'
import classes from './List.module.css'

const List = () => {
  return (
    <ul className={classes.list}>
      <Item img={contactImg} name="Петр" />
      <Item img={contactImg} name="Вася" />
    </ul>
  )
}

export default List
