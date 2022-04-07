import React from 'react'
import { Button } from './Button'
import { TextField } from './TextField'
import { Link } from './Link'
import { useFormik } from 'formik'
import styles from './Basics.module.css'

export default function UserSignIn () {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

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
