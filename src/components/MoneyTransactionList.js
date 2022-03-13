import React from 'react'
import { Button } from './Button'
import styles from './MoneyTransactionList.module.css'
import { Separator } from './Separator'

export const MoneyTransactionList = ({ list }) => {
  return (
        <div>
            {list.map((entry) => (
                <div key={entry.id}>
                    <Separator />
                    <div className={`${styles.wrapper}`}>
                        <p className={`${styles.one} ${entry.paid ? styles.paid : styles.notpaid}`}>{entry.name}</p>
                        <p className={`${styles.two} ${styles.amount} ${entry.paid ? styles.paid : styles.notpaid}`}>{entry.amount} $</p>
                        {!entry.paid ? <Button style='secondary' className={`${styles.three}`}>Paid</Button> : ''}
                    </div>
                </div>
            ))}
        </div>
  )
}
