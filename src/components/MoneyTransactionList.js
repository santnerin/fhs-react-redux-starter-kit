import React from 'react'
import { MoneyTransactionItem } from './MoneyTransactionItem'

const DEFAULT_TRANSACTION = []
const DEFAULT_USERS = []

export const MoneyTransactionList = ({ transaction = DEFAULT_TRANSACTION, users = DEFAULT_USERS }) => {
  return (
    <div>
      {transaction.map((entry) => (
        <div key={entry.id}>
          <MoneyTransactionItem transaction={entry} debitor={users.find((user) => user.id === entry.debitorId)} />
        </div>
      ))}
    </div>
  )
}
