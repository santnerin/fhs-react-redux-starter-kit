import React from 'react'
import { Dropdown } from './Dropdown'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'
import { useFormik } from 'formik'
import styles from './MoneyTransactionCreate.module.css'

export const MoneyTransactionCreate = ({ users, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      debitorid: 0,
      creditorId: 1,
      amount: 0
    },
    onSubmit: values => {
      onSubmit(values.debitorid, values.creditorId, values.amount)
    }
  })

  return (
    <form className={`${styles.wrapper}`} onSubmit={formik.handleSubmit}>
      <Dropdown onChange={formik.handleChange} value={formik.values.debitorid} options={users} label='DebitorId' className={`${styles.column1}`} />
      <DecimalInput onChange={formik.handleChange} amount={formik.values.amount} label="Amount" />
      <Button style='secondary' className={`${styles.column3}`}>Create</Button>
    </form>
  )
}
