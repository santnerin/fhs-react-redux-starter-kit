import React from 'react'
import { Dropdown } from './Dropdown'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'
import { useFormik } from 'formik'
import styles from './MoneyTransactionCreate.module.css'

export const MoneyTransactionCreate = ({ users = [], onSubmit }) => {
  const ownID = 'ejhHpqUKifetuDBvQlRK'

  const formik = useFormik({
    initialValues: {
      debitorId: '',
      creditorId: ownID,
      amount: 0
    },
    onSubmit: values => {
      onSubmit(values.debitor, values.creditorId, values.amount)
    }
  })

  return (
    <form className={`${styles.wrapper}`} onSubmit={formik.handleSubmit}>
      <Dropdown onChange={formik.handleChange} options={users} label='Debitor' className={`${styles.column1}`} />
      <DecimalInput onChange={formik.handleChange} amount={formik.values.amount} label="Amount" />
      <Button style='secondary' className={`${styles.column3}`}>Create</Button>
    </form>
  )
}
