import React from 'react'
import Item from './Item/Item'
import classes from './Items.module.css'

const Items = () => {
  return (
    <div className={classes.items}>
      <Item question="Город" answer="Москва" />
      <Item question="День рождения" answer="26 июня" />
    </div>
  )
}

export default Items
