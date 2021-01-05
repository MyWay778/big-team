import React from 'react'
import Item from './Item/Item'
import classes from './Items.module.css'

const Items = props => {
  return (
    <div className={classes.items}>
      <Item question="Статус" answer={props.status} />
    </div>
  )
}

export default Items
