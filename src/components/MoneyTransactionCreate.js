import React from 'react'
import { Dropdown } from './Dropdown'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'
import { useFormik } from 'formik'
import styles from './MoneyTransactionCreate.module.css'
import { db } from '../firebase-config.js'
import { collection, getDocs, setDocs, doc } from 'firebase/firestore'
import { findAllByTestId } from '@testing-library/react'

export const MoneyTransactionCreate = ({ users, setTransactions }) => {
  const ownID = 'ejhHpqUKifetuDBvQlRK'
  const newTransactionRef = doc(collection(db, 'transactions'))
  const transactionCollectionRef = collection(db, 'transactions')

  const formik = useFormik()({
    initialValues: {
      debitorid: 0,
      creditorId: 1,
      amount: 0
    },
    onSubmit={ async (values, { setSubmitting }) => {
      const transaction = { amount: values.amount, paidAt: null }
      onSubmit(transaction.debitorid = ownID, transaction.creditorId = values.userId)

      await setDocs(newTransactionRef, transaction)
      setTransactions(await getTransactions())
    }}
  })


  onSubmit={ async (values, { setSubmitting }) => {
    await ...
    setSubmitting(false)
}}


  const getTransactions = async () => {
    const data = await getDocs(transactionCollectionRef)
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    return parsedData
  }

  return (
    <form className={`${styles.wrapper}`} onSubmit={formik.handleSubmit} setTransaction={setTransactions}>
      <Dropdown onChange={formik.handleChange} value={formik.values.debitorid} options={users} label='DebitorId' className={`${styles.column1}`} />
      <DecimalInput onChange={formik.handleChange} amount={formik.values.amount} label="Amount" />
      <Button style='secondary' className={`${styles.column3}`}>Create</Button>
    </form>
  )
}
