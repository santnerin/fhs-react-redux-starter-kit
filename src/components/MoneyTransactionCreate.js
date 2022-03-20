import React from 'react'
import { Dropdown } from './Dropdown'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'
import { useFormik } from 'formik'
import styles from './MoneyTransactionCreate.module.css'

export const MoneyTransactionCreate = ({ users }) => {
  const formik = useFormik({
    initialValues: {
      debitorid: '',
      creditorid: '1',
      amount: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <form className={`${styles.wrapper}`} onSubmit={formik.handleSubmit}>
      <Dropdown onChange={formik.handleChange} debitorid={formik.values.debitorid} options={users} label='DebitorId' className={`${styles.column1}`} />
      <DecimalInput onChange={formik.handleChange} amount={formik.values.amount} label="Amount" />
      <Button style='secondary' className={`${styles.column3}`}>Create</Button>
    </form>
  )
}
