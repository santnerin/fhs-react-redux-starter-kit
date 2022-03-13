import React from 'react'
import styles from './Button.module.css'

export const Button = ({ onClick, children, style = 'primary' }) => {
  console.log(onClick)
  return (
    <button onClick={onClick} className={`${styles.button} ${style === 'primary' ? styles.primary : styles.secondary}`}>
      {children}
    </button>
  )
}
