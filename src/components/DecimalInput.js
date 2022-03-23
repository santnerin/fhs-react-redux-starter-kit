import React from 'react'
import styles from './DecimalInput.module.css'

export const DecimalInput = ({ label, amount, onChange }) => {
  return (
    <label htmlFor={`${label.toLowerCase()}`} className={`${styles.label}`}>
      {label}
      <input type="number" step=".01" amount={amount} onChange={onChange} name={label.toLowerCase()} id={label.toLowerCase()} className={`${styles.input}`} />
    </label>
  )
}
