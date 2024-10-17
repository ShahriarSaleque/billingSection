import React from 'react';
import styles from './PaymentDetailsContainer.module.scss';
import PaymentForm from './PaymentForm';

const PaymentDetails = ({ errors, touched }: PaymentDetailsProps) => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Payment details</div>
      <div className={styles['form-container']}>
        <PaymentForm errors={errors} touched={touched} />
      </div>
    </div>
  );
};

export default PaymentDetails;

type PaymentDetailsProps = {
  errors: any;
  touched: any;
};
