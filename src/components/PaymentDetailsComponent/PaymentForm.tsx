import React from 'react';
import { Field } from 'formik';
import styles from '../ComponentStyling.module.scss';
import { formatCardNumber } from '../../utils/formatCardNumber';

const PaymentForm = ({
  errors,
  touched,
  setFieldValue,
  values,
}: PaymentFormProps) => {
  return (
    <>
      <div className={styles['input-component']}>
        <div>
          <label htmlFor="cardNumber">Card number</label>
        </div>
        <div>
          <input
            name="cardNumber"
            onChange={(event) => {
              setFieldValue('cardNumber', formatCardNumber(event));
            }}
            value={values.cardNumber}
            placeholder="1234 1234 1234 1234"
          />
        </div>
        {errors.cardNumber && touched.cardNumber ? (
          <div className={styles['errorText']}>{errors.cardNumber}</div>
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
          <div className={styles['errorText']}>{errors.cardHolderName}</div>
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
            <div className={styles['errorText']}>{errors.expiryDate}</div>
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
          {errors.cvv && touched.cvv ? (
            <div className={styles['errorText']}>{errors.cvv}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

type PaymentFormProps = {
  errors: any;
  touched: any;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => any;
  values: any;
};

export default PaymentForm;
