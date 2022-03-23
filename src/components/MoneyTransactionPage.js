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

  return (
        <>
            <MoneyTransactionCreate users={users} />
            <MoneyTransactionList transaction={moneyTransactions} users={users} />
        </>
  )
}
