import React from 'react'
import HeaderFour from './HeaderFour/HeaderFour'
import Items from './Items/Items'
import classes from './TextBlock.module.css'

const TextBlock = () => {
  return (
    <div className={classes.textBlock}>
      <HeaderFour text="Джек Найт" />
      <Items />
    </div>
  )
}

export default TextBlock
