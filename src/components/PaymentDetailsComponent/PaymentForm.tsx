import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './PaymentDetailsContainer.module.scss';

const PaymentSchema = Yup.object().shape({});

const PaymentForm = () => {
  return (
    <Formik
      initialValues={{
        cardNumber: 0,
        cardHolderName: '',
        expiryDate: '',
        cvv: 0,
      }}
      validationSchema={PaymentSchema}
      onSubmit={(values) => {
        console.log('values', values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={styles['input-component']}>
            <div>
              <label htmlFor="cardNumber">Card number</label>
            </div>
            <div>
              <Field name="cardNumber" type="number" />
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
              <Field name="cardHolderName" />
            </div>

            {errors.cardHolderName && touched.cardHolderName ? (
              <div>{errors.cardHolderName}</div>
            ) : null}
          </div>

          <div className={styles['input-component']}>
            <div>
              <label htmlFor="expiryDate">Expiry</label>
            </div>
            <div>
              <Field name="expiryDate" />
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
            <div>
              <Field name="cvv" />
            </div>
            {errors.cvv && touched.cvv ? <div>{errors.cvv}</div> : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;
