import React from 'react'
import { Button } from './Button'
import styles from './MoneyTransactionItem.module.css'
import { Separator } from './Separator'
import { useFormik } from 'formik'
import { db } from '../firebase-config'
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'

const DEFAULT_TRANSACTION = {}
const DEFAULT_DEBITOR = {}

export const MoneyTransactionItem = ({ transaction = DEFAULT_TRANSACTION, debitor = DEFAULT_DEBITOR }) => {
  const formik = useFormik({
    initialValues: {
      id: '',
      paidAt: serverTimestamp()
    },
    onSubmit: async (values) => {
      const transactionRef = doc(db, 'transactions', values.id)
      console.log(transactionRef)
      await updateDoc(transactionRef, {
        paidAt: values.paidAt
      })
    }
  })

  function setPaid () {
    transaction.paidAt = serverTimestamp()
  }

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
          {!transaction.paidAt ? <Button onClick={setPaid} style='secondary' className={`${styles.column3}`}>Paid</Button> : ''}
        </div>
      </form>
    </div>
  )
}
