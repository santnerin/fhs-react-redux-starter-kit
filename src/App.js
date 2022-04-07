import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const UserSignIn = lazy(() => import('./components/UserSignIn'))
const UserSignUp = lazy(() => import('./components/UserSignUp'))
const MoneyTransactionPage = React.lazy(() => import('./components/MoneyTransactionPage'))

export function App () {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/sign-in" element={<UserSignIn />} />
          <Route path="/sign-up" element={<UserSignUp/>} />
          <Route path="/money-transactions" element={<MoneyTransactionPage/>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
