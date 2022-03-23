import React from 'react'
import { Button } from './Button'
import styles from './MoneyTransactionItem.module.css'
import { Separator } from './Separator'
import { useFormik } from 'formik'

export const MoneyTransactionItem = ({ transaction = {}, debitor = {} }) => {
  const formik = useFormik({
    initialValues: {
      id: '',
      paidAt: (new Date()).toISOString()
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  function setValue (id) {
    formik.initialValues.id = id
  }
  return (
    <div>
      <Separator />
      <form onSubmit={formik.handleSubmit}>
        <div className={`${styles.wrapper}`}>
          <p className={`${styles.column1} ${transaction.paidAt ? styles.paid : ''}`}>{debitor.name}</p>
          <p className={`${styles.column2} ${styles.amount} ${transaction.paidAt != null ? styles.paid : ''}`}>{transaction.amount} $</p>
          <input type="number" id={transaction.id} onChange={setValue(transaction.id)} className={`${styles.hidden}`} />
          {!transaction.paidAt ? <Button style='secondary' className={`${styles.column3}`}>Paid</Button> : ''}
        </div>
      </form>
    </div>
  )
}
