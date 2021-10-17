import React from 'react'
import styles from './Sidebar.module.scss';
import { links } from '../../data';
import { FaTimes } from 'react-icons/fa';

export default function Sidebar(props) {
  const classes = [styles.Sidebar];
  if (props.show) {
    classes.push(styles.Show);
  }
  
  const navLinks = links.map(link =>
    <a
      key={link.id}
      href={link.url}
    >
      <span className={styles.Icon}>{link.icon}</span>
      <span className={styles.Text}>{link.text}</span>
    </a>
  )
  return (
    <div className={classes.join(' ')}>
      <div className={styles.SidebarHeading}>
        <img className={styles.Logo} src="logo.svg" alt="logo" />
        <span className="btn-close" onClick={props.closeHandler}>
          <FaTimes />
        </span>
      </div>
      <nav className={styles.Nav}>
        {navLinks}
      </nav>
    </div>
  )
}
