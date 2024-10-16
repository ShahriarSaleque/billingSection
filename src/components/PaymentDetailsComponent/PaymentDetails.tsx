import React from 'react'
import styles from './PaymentDetailsContainer.module.scss';
import PaymentForm from './PaymentForm';

const PaymentDetails = () => {
  return (
    <div className={styles['container']}>
        <div className={styles['header']}>
            Payment Details
        </div>
        <div className={styles['form-container']}>
            <PaymentForm />
        </div>
    </div>
  )
}

export default PaymentDetails