import React from 'react'
import { Button } from './Button'
import { TextField } from './TextField'
import { Link } from './Link'
import { useFormik } from 'formik'
import styles from './Basics.module.css'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, auth, email, password } from 'firebase/auth'
import { db } from '../firebase-config.js'
import { setDoc, doc } from 'firebase/firestore'

export const UserSignUp = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  async function handleSubmit (e) {
    e.preventDefault()

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const uid = userCredentials.uid

      await setDoc(doc(db, 'users', uid), { name: name })

      navigate('/money-transactions')
    } catch (error) {
      alert('Please try again!')
    }
  }

  return (
    <div className={`${styles.wrapper}`}>
      <form onSubmit={formik.handleSubmit}>
        <TextField onChange={formik.handleChange} value={formik.values.name} label="Name" type="text"></TextField>
        <TextField onChange={formik.handleChange} value={formik.values.email} label="Email" type="email"></TextField>
        <TextField onChange={formik.handleChange} value={formik.values.password} label="Password" type="password"></TextField>
        <TextField onChange={formik.handleChange} value={formik.values.password} label="Password wiederholen" type="password"></TextField>
        <Button>Sign Up</Button>
        <Link link="#" name="Sign In"></Link>
      </form>
    </div>
  )
}
