import React from 'react'
import { Button } from './Button'
import styles from './MoneyTransactionList.module.css'
import { Separator } from './Separator'
import { useFormik } from 'formik'

export const MoneyTransactionList = () => {
  const data = {
    moneyTransactions: [
      { id: 1, creditorId: 1, debitorId: 2, amount: 10.00, paidAt: null },
      { id: 2, creditorId: 3, debitorId: 1, amount: 11.20, paidAt: '2000-01-01T00:00:00+01+00' }
    ],
    user: [
      { id: 1, name: 'Sepp' },
      { id: 2, name: 'Mike' },
      { id: 3, name: 'Fabian' }
    ]
  }

  const formik = useFormik({
    initialValues: {
      id: '',
      paidAt: (new Date()).toISOString()
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  function setValue (id) {
    formik.initialValues.id = id
  }

  return (
        <div>
            {data.moneyTransactions.map((entry) => (
                <div key={entry.id}>
                    <Separator />
                    <form onSubmit={formik.handleSubmit}>
                        <div className={`${styles.wrapper}`}>
                            <p className={`${styles.column1} ${entry.paidAt ? styles.paid : ''}`}>{(data.user.find((user) => user.id === entry.debitorId)).name}</p>
                            <p className={`${styles.column2} ${styles.amount} ${entry.paidAt != null ? styles.paid : ''}`}>{entry.amount} $</p>
                            <label htmlFor="id">
                                <input type="number" onChange={setValue(entry.id)} className={`${styles.input}`} />
                            </label>
                            {!entry.paidAt ? <Button style='secondary' className={`${styles.column3}`}>Paid</Button> : ''}
                        </div>
                    </form>
                </div>
            ))}
        </div>
  )
}
