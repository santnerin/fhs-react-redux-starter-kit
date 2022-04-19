import React from 'react'
import { Button } from './Button'
import { TextField } from './TextField'
import { Link } from './Link'
import { useFormik } from 'formik'
import styles from './Basics.module.css'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from '../firebase-config.js'
import { setDoc, doc } from 'firebase/firestore'

export default function UserSignUp () {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      handleSubmit(values.name, values.email, values.password)
    }
  })

  async function handleSubmit (name, email, password) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const uid = userCredentials.user.uid

      await setDoc(doc(db, 'users', uid), { name: name })
    } catch (error) {
      alert('Please try again!')
    }
    navigate('/money-transactions')
  }

  return (
    <div className={`${styles.wrapper}`}>
      <form onSubmit={formik.handleSubmit}>
        <TextField onChange={formik.handleChange} value={formik.values.name} label="Name" type="text"></TextField>
        <TextField onChange={formik.handleChange} value={formik.values.email} label="Email" type="email"></TextField>
        <TextField onChange={formik.handleChange} value={formik.values.password} label="Password" type="password"></TextField>
        <Button>Sign Up</Button>
        <Link link="/sign-in" name="Sign In"></Link>
      </form>
    </div>
  )
}
