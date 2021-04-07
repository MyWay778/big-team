import React from 'react'
import classNames from 'classnames/bind'
import styles from './Link.module.css'

let cx = classNames.bind(styles);

const Link = props => {
  return <a className={cx({inactive: props.inactive})} href={props.href}>{props.title}</a>
}

export default Link
