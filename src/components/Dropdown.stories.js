import React from 'react'
import { storiesOf } from '@storybook/react'
import { Dropdown } from './Dropdown'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' }
]

storiesOf('Dropdown', module).add('default', () => (
    <Dropdown options={options} label="Label" />
))
