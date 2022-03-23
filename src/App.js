import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserSignIn } from './components/UserSignIn'
import { UserSignUp } from './components/UserSignUp'
import { MoneyTransactionCreate } from './components/MoneyTransactionCreate'
import { MoneyTransactionList } from './components/MoneyTransactionList'

export function App () {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<UserSignIn />} />
        <Route path="/sign-up" element={<UserSignUp />} />

        <Route
          path="/money-transactions"
          element={
            <>
              <MoneyTransactionCreate
                users={[
                  { id: 1, name: 'Sepp' },
                  { id: 2, name: 'Mike' },
                  { id: 3, name: 'Fabian' }
                ]}

              />
              <MoneyTransactionList />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App

// https://stackoverflow.com/questions/37342997/render-multiple-components-in-react-router?msclkid=06dfc5d5a83211ec93575d5d1583483d
