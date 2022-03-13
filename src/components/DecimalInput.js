import React from 'react'
import styles from './DecimalInput.module.css'

export const DecimalInput = ({ label }) => {
  return (
    <label htmlFor={`${label.toLowerCase()}`} className={`${styles.label}`}>
      {label}
      <input type="number" step=".01" name={label.toLowerCase()} id={label.toLowerCase()} className={`${styles.input}`} />
    </label>
  )
}
