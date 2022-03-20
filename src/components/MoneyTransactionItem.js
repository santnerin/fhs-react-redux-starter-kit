import React from 'react'
import { Button } from './Button'
import styles from './MoneyTransactionItem.module.css'
import { Separator } from './Separator'
import { useFormik } from 'formik'

export const MoneyTransactionItem = (transaction, debitor) => {
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
                    <p className={`${styles.column1} ${transaction.data.paidAt ? styles.paid : ''}`}>{transaction.debitor.name}</p>
                    <p className={`${styles.column2} ${styles.amount} ${transaction.data.paidAt != null ? styles.paid : ''}`}>{transaction.data.amount} $</p>
                    <input type="number" id={transaction.data.id} onChange={setValue(transaction.data.id)} className={`${styles.hidden}`} />
                    {!transaction.data.paidAt ? <Button style='secondary' className={`${styles.column3}`}>Paid</Button> : ''}
                </div>
            </form>
        </div>
  )
}
