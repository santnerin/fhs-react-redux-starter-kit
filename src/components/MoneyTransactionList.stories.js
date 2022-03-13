import React from 'react'
import { storiesOf } from '@storybook/react'
import { MoneyTransactionList } from './MoneyTransactionList'

const transactionList = [
  { id: '0', name: 'User 1', amount: 10.54, paid: false },
  { id: '1', name: 'User 2', amount: 2.40, paid: true },
  { id: '2', name: 'User 3', amount: 980.72, paid: true },
  { id: '3', name: 'User 4', amount: 52.01, paid: false },
  { id: '4', name: 'User 5', amount: -9.87, paid: false }
]

storiesOf('MoneyTransactionList', module).add('default', () => <MoneyTransactionList list={transactionList} />)
