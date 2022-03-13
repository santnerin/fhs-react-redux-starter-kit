import React from 'react'
import { Dropdown } from './Dropdown'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'
import styles from './MoneyTransactionCreate.module.css'

export const MoneyTransactionCreate = ({ users }) => {
  const submitAlert = (e) => {
    e.preventDefault()
    alert("Super fancy submit button that doesn't work...")
  }
  return (
    <form className={`${styles.wrapper}`} onSubmit={submitAlert}>
      <Dropdown options={users} label='User' className={`${styles.column1}`} />
      <DecimalInput label="Label" />
      <Button onClick={submitAlert} style='secondary' className={`${styles.column3}`}>Create</Button>
    </form>
  )
}
