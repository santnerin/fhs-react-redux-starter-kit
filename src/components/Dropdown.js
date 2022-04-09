import React from 'react'
import styles from './Dropdown.module.css'

export const Dropdown = ({ label, options = [], onChange }) => {
  return (
    <label htmlFor={`${label.toLowerCase()}`} className={`${styles.label}`}>
      {label}
      <select name={label.toLowerCase()} id={label.toLowerCase()} onChange={onChange} className={`${styles.dropdown}`}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
        )
      </select>
    </label>
  )
}
