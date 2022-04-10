import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom'
import { UserSignIn } from './components/UserSignIn'
import { UserSignUp } from './components/UserSignUp'
import { MoneyTransactionPage } from './components/MoneyTransactionPage'
import { auth } from './firebase-config'

export function App () {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
  }, [])

  const ProtectedRoute = ({ children, user }) => {
    const location = useLocation()

    if (!user) {
      return <Navigate to="/sign-in" state={{ from: location }} replace />
    }
    return <>{React.cloneElement(children, { user })}</>
  }

  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<UserSignIn user={user}/>} />
        <Route path="/sign-up" element={<UserSignUp user={user}/>} />
        <Route path="/money-transactions"
          element={
            <ProtectedRoute user={user}>
              <MoneyTransactionPage/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
