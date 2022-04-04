import React, { useEffect, useState } from 'react'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'
import { MoneyTransactionList } from './MoneyTransactionList'
import { db } from '../firebase-config.js'
import { collection, getDocs } from 'firebase/firestore'

export const MoneyTransactionPage = () => {
  const userCollectionRef = collection(db, 'users')
  const transactionCollectionRef = collection(db, 'transactions')

  // const [moneyTransactions, setTransactions] = useState([])
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3001/money-transaction')
  //     .then((response) => response.json())
  //     .then((json) => setTransactions(json))
  //   fetch('http://localhost:3001/user')
  //     .then((response) => response.json())
  //     .then((json) => setUsers(json))
  // }, [])

  // async function handleSubmit(debitor, creditor, amount) {
  //   await fetch('http://localhost:3001/money-transaction', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ debitorId: parseInt(debitor, 10), creditorId: creditor, amount: amount, paidAt: null })
  //   })
  //   await fetch('http://localhost:3001/money-transaction')
  //     .then((response) => response.json())
  //     .then((json) => setTransactions(json))
  // }

  const [users, setUsers] = useState([])
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    setUsers(getUsers())
    setTransactions(getTransaction())
  }, [])

  async function getUsers () {
    const data = await getDocs(userCollectionRef)

    // We generate our own user objects which match our expected schema
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(parsedData)
  }
  async function getTransaction () {
    const data = await getDocs(transactionCollectionRef)

    // We generate our own user objects which match our expected schema
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(parsedData)
  }

  return (
    <>
      <MoneyTransactionCreate users={users} setTransactions={transactions} />
      <MoneyTransactionList transaction={transactions} users={users} />
    </>
  )
}
