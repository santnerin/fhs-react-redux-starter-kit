import React from 'react'
import { storiesOf } from '@storybook/react'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'

const users = [
  { value: '0', label: 'Select' },
  { value: '1', label: 'Sepp' },
  { value: '2', label: 'Mike' },
  { value: '3', label: 'Fabian' }
]

storiesOf('MoneyTransactionCreate', module).add('default', () => <MoneyTransactionCreate users={users} />)
