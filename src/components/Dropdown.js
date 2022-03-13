import React from 'react'
import styles from './Dropdown.module.css'

export const Dropdown = ({ label, options }) => {
  return (
    <label htmlFor={`${label.toLowerCase()}`} className={`${styles.label}`}>
      {label}
      <select name={label.toLowerCase()} id={label.toLowerCase()} className={`${styles.dropdown}`}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
        )
      </select>
    </label>
  )
}
