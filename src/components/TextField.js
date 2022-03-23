import React from 'react'
import styles from './TextField.module.css'

export const TextField = ({ label, type, onChange, value }) => {
  return (
    <label htmlFor={`${label.toLowerCase()}`} className={`${styles.label}`}>
      {label}
      <input type={type} name={label.toLowerCase()} id={label.toLowerCase()} onChange={onChange} value={value} className={`${styles.input}`} />
    </label>
  )
}
