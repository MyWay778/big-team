import React from 'react'
import HeaderFour from './HeaderFour/HeaderFour'
import Items from './Items/Items'
import classes from './TextBlock.module.css'

const TextBlock = props => {
  return (
    <div className={classes.textBlock}>
      <HeaderFour text={props.name} />
      <Items status={props.status}/>
    </div>
  )
}

export default TextBlock
