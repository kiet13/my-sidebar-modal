import React from 'react'
import styles from './Button.module.scss'

export default function ButtonCollapse(props) {
  const classes = [styles.ButtonCollapse];
  if (props.classes) {
    classes.push(props.classes);
  }
  return (
    <button className={classes.join(' ')} onClick={props.openSidebarHandler}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}
