import React from 'react';
import { Field } from 'formik';
import styles from '../ComponentStyling.module.scss';

const PaymentForm = ({ errors, touched }: PaymentFormProps) => {
  return (
    <>
      <div className={styles['input-component']}>
        <div>
          <label htmlFor="cardNumber">Card number</label>
        </div>
        <div>
          <Field name="cardNumber" placeholder="1234 1234 1234 1234" />
        </div>
        {errors.cardNumber && touched.cardNumber ? (
          <div>{errors.cardNumber}</div>
        ) : null}
      </div>

      <div className={styles['input-component']}>
        <div>
          <label htmlFor="cardHolderName">Cardholder name</label>
        </div>
        <div>
          <Field name="cardHolderName" placeholder="Full name on card" />
        </div>

        {errors.cardHolderName && touched.cardHolderName ? (
          <div>{errors.cardHolderName}</div>
        ) : null}
      </div>

      <div className={styles['expiry-cvv-container']}>
        <div className={styles['input-component']}>
          <div>
            <label htmlFor="expiryDate">Expiry</label>
          </div>
          <div className={styles['expiry-input']}>
            <Field name="expiryDate" placeholder="MM/YY" />
          </div>
          {errors.expiryDate && touched.expiryDate ? (
            <div>{errors.expiryDate}</div>
          ) : null}
        </div>

        <div className={styles['input-component']}>
          <div>
            {' '}
            <label htmlFor="cvv">Cvv</label>
          </div>
          <div className={styles['cvv-input']}>
            <Field name="cvv" placeholder="123" />
          </div>
          {errors.cvv && touched.cvv ? <div>{errors.cvv}</div> : null}
        </div>
      </div>
    </>
  );
};

type PaymentFormProps = {
  errors: any;
  touched: any;
};

export default PaymentForm;
