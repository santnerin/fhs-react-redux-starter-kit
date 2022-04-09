import React from 'react'
import { Button } from './Button'
import { TextField } from './TextField'
import { Link } from './Link'
import { useFormik } from 'formik'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase-config.js'
import styles from './Basics.module.css'

export const UserSignIn = ({ user }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => { handleSubmit(values.email, values.password) }
  })

  async function handleSubmit (email, password) {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
    } catch (error) {
      alert('Please try again!')
    }
  }

  if (user) return <Navigate to="/money-transactions"></Navigate>

  return (
    <div className={`${styles.wrapper}`}>
      <form onSubmit={formik.handleSubmit}>
        <TextField onChange={formik.handleChange} value={formik.values.email} label="Email" type="email"></TextField>
        <TextField onChange={formik.handleChange} value={formik.values.password} label="Password" type="password"></TextField>
        <Button>Sign In</Button>
        <Link link="#" name="Sign Up"></Link>
      </form>
    </div>
  )
}
