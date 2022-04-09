import React from 'react'
import { MoneyTransactionItem } from './MoneyTransactionItem'

export const MoneyTransactionList = ({ transaction = [], users = [] }) => {
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
