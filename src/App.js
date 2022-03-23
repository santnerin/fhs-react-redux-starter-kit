import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserSignIn } from './components/UserSignIn'
import { UserSignUp } from './components/UserSignUp'
import { MoneyTransactionPage } from './components/MoneyTransactionPage'

export function App () {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<UserSignIn />} />
        <Route path="/sign-up" element={<UserSignUp />} />
        <Route path="/money-transactions" element={<MoneyTransactionPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
