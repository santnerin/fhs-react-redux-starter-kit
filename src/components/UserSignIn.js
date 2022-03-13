import React from 'react'
import { Button } from './Button'
import { TextField } from './TextField'
import { Link } from './Link'
import styles from './Basics.module.css'

export const UserSignIn = () => {
  const submitAlert = (e) => {
    e.preventDefault()
    alert("Button doesn't work.")
  }

  return (
    <div className={`${styles.wrapper}`}>
      <form onSubmit={submitAlert}>
        <TextField label="Email" type="email"></TextField>
        <TextField label="Password" type="password"></TextField>
        <Button onClick={submitAlert}>Sign In</Button>
        <Link link="#" name="Sign Up"></Link>
      </form>
    </div>
  )
}
