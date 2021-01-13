import React from 'react'
import Item from './Item/Item'
import classes from './Items.module.css'

const Items = props => {
  return (
    <div className={classes.items}>
      <Item question="О себе" answer={props.status} />
    </div>
  )
}

export default Items
