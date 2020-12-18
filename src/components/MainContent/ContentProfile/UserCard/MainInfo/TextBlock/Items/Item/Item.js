import React from 'react'
import classes from './Item.module.css'

const Item = props => {
  return (
    <div>
      <span className={classes.item_halfOpacity}>{props.question}:</span>&nbsp;&nbsp;{props.answer}
    </div>
  )
}

export default Item
