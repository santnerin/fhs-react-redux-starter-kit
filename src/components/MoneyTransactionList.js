import React from 'react'
import { MoneyTransactionItem } from './MoneyTransactionItem'

export const MoneyTransactionList = () => {
  const data = {
    moneyTransactions: [
      { id: 1, creditorId: 1, debitorId: 2, amount: 10.00, paidAt: null },
      { id: 2, creditorId: 3, debitorId: 1, amount: 11.20, paidAt: '2000-01-01T00:00:00+01+00' }
    ],
    user: [
      { id: 1, name: 'Sepp' },
      { id: 2, name: 'Mike' },
      { id: 3, name: 'Fabian' }
    ]
  }

  return (
    <div>
      {data.moneyTransactions.map((entry) => (
        <div key={entry.id}>
          <MoneyTransactionItem data={entry} debitor={data.user.find((user) => user.id === entry.debitorId)} />
        </div>
      ))}
    </div>
  )
}
