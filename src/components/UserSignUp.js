import React from 'react'
import { Button } from './Button'
import { TextField } from './TextField'
import { Link } from './Link'
import styles from './Basics.module.css'

export const UserSignUp = () => {
  const submitAlert = (e) => {
    e.preventDefault()
    alert("Super fancy submit button that doesn't work...")
  }

  return (
    <div className={`${styles.wrapper}`}>
      <form onSubmit={submitAlert}>
        <TextField label="Email" type="email"></TextField>
        <TextField label="Password" type="password"></TextField>
        <Button onClick={submitAlert}>Sign Up</Button>
        <Link link="#" name="Sign In"></Link>
      </form>
    </div>
  )
}
