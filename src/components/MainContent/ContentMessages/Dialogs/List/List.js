import React from 'react'
import Item from './item/Item'

import contactImg from '../../static/user.svg'
import classes from './List.module.css'

const List = (props) => {
  return (
    <ul className={classes.list}>
        {
            props.dialogsData.dialogs.map(data => <Item key={data.id} img={contactImg} name={data.name} id={data.id}/>)
        }
    </ul>
  )
}

export default List
