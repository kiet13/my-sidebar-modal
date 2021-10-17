import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import styles from './Modal.module.scss'
import { FaTimes } from 'react-icons/fa'

export default function Modal(props) {
  const classes = [styles.Modal];
  if (props.show) {
    classes.push(styles.Show);
  }
  
  return (
    <Backdrop show={props.show} closed={props.modalClosed}>
      <div className={classes.join(' ')}>
        <span className={[styles.ModalClosed, "btn-close"].join(' ')} onClick={props.modalClosed}>
          <FaTimes />
        </span>
        {props.children}
      </div>
    </Backdrop>
  )
}
