import React from 'react'
import classes from './Search.module.css'

const Search = () => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="Search.." className={classes.search__input} />
      <input type="submit" className={classes.search__submit} value="" />
    </div>
  )
}

export default Search
