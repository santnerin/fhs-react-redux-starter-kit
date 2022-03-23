import React from 'react'
import styles from './Button.module.css'

export const Button = ({ children, type = 'submit', style = 'primary' }) => {
  return (
    <button type={type} className={`${styles.button} ${style === 'primary' ? styles.primary : styles.secondary}`}>
      {children}
    </button>
  )
}
