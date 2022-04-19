import React, { Suspense, useEffect, useState, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom'
import { auth } from './firebase-config'
const UserSignIn = lazy(() => import('./components/UserSignIn'))
const UserSignUp = lazy(() => import('./components/UserSignUp'))
const MoneyTransactionPage = React.lazy(() => import('./components/MoneyTransactionPage'))

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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  )
}

export default App
