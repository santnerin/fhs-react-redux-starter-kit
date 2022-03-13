import React from 'react'
import styles from './TextField.module.css'

export const TextField = ({ label, type }) => {
  return (
    <label htmlFor={`${label.toLowerCase()}`} className={`${styles.label}`}>
      {label}
      <input type={type} name={label.toLowerCase()} id={label.toLowerCase()} className={`${styles.input}`} />
    </label>
  )
}
