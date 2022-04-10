import React, { useEffect, useState } from 'react'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'
import { MoneyTransactionList } from './MoneyTransactionList'
import { db } from '../firebase-config.js'
import { collection, doc, setDoc, getDocs } from 'firebase/firestore'
import { Button } from './Button'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import styles from './Button.module.css'

export const MoneyTransactionPage = () => {
  const userCollectionRef = collection(db, 'users')
  const transactionCollectionRef = collection(db, 'transactions')
  const [users, setUsers] = useState([])
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getUsers()
    getTransaction()
  }, [])

  async function handleSubmit (debitor, creditor, amount) {
    const newTransaction = doc(collection(db, 'transactions'))
    await setDoc(newTransaction, { creditorId: creditor, debitorId: debitor, amount: amount, paidAt: null })
    getTransaction()
  }

  async function getUsers () {
    const data = await getDocs(userCollectionRef)
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(parsedData)
    setUsers(parsedData)
  }
  async function getTransaction () {
    const data = await getDocs(transactionCollectionRef)
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(parsedData)
    setTransactions(parsedData)
  }

  const navigate = useNavigate()

  function logout () {
    const auth = getAuth()
    signOut(auth).then(() => {
      console.log('Success...')
      navigate('/sign-in')
    })
  }

  return (
    <>
      <div className={styles.logout}>
        <Button onClick={logout} style='secondary'>Logout</Button>
      </div>
      <MoneyTransactionCreate users={users} onSubmit={handleSubmit} />
      <MoneyTransactionList transaction={transactions} users={users} />
    </>
  )
}
