import React, { useEffect, useState } from 'react'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'
import { MoneyTransactionList } from './MoneyTransactionList'

export const MoneyTransactionPage = () => {
  const [moneyTransactions, setTransactions] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/money-transaction')
      .then((response) => response.json())
      .then((json) => setTransactions(json))
    fetch('http://localhost:3001/user')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  async function handleSubmit (debitor, creditor, amount) {
    await fetch('http://localhost:3001/money-transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ debitorId: parseInt(debitor, 10), creditorId: creditor, amount: amount, paidAt: null })
    })
    await fetch('http://localhost:3001/money-transaction')
      .then((response) => response.json())
      .then((json) => setTransactions(json))
  }

  return (
        <>
            <MoneyTransactionCreate users={users} onSubmit={handleSubmit} />
            <MoneyTransactionList transaction={moneyTransactions} users={users} />
        </>
  )
}
