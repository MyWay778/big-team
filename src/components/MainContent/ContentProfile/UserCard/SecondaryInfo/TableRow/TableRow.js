import React from 'react'
import classes from './TableRow.module.css'

const TableRow = props => {
  return (
    <tr>
      <td className={classes.tableRow_halfOpacity}>{props.question}:</td>
      <td className={classes.tableRow__answer}>{props.answer}</td>
    </tr>
  )
}

export default TableRow
