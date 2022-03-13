import React from 'react'
import { storiesOf } from '@storybook/react'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'

const users = [
  { value: '0', label: 'Select' },
  { value: '1', label: 'User 1' },
  { value: '2', label: 'User 2' },
  { value: '3', label: 'User 3' }
]

storiesOf('MoneyTransactionCreate', module).add('default', () => <MoneyTransactionCreate users={users} />)
