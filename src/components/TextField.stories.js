import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextField } from './TextField'

storiesOf('Textfield', module).add('default', () => (
    <TextField type="type" label="Label" />
))
