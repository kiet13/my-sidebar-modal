import React from 'react'
import styles from './Button.module.scss';

export default function Button(props) {
  const classes = [styles.ButtonNormal];
  if (props.classes) {
    classes.push(props.classes);
  }
  return (
    <button className={classes.join(' ')} onClick={props.clicked}>
      {props.children}
    </button>
  )
}
