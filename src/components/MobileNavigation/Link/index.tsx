import React from 'react'

import styles from './styles.module.scss';

const Link: React.FC = ({ children }) => {
  return (
    <a className={styles.link} href="/#">{children}</a>
  )
}

export default Link;
