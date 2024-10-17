import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
          <div>
            <label htmlFor="cardNumber">Card number</label>
          </div>
          <Field name="cardNumber" type="number" />
          {errors.cardNumber && touched.cardNumber ? (
            <div>{errors.cardNumber}</div>
          ) : null}

          <label htmlFor="cardHolderName">Cardholder name</label>
          <Field name="cardHolderName" />
          {errors.cardHolderName && touched.cardHolderName ? (
            <div>{errors.cardHolderName}</div>
          ) : null}

          <label htmlFor="expiryDate">Expiry</label>
          <Field name="expiryDate" />
          {errors.expiryDate && touched.expiryDate ? (
            <div>{errors.expiryDate}</div>
          ) : null}

          <label htmlFor="cvv">Cvv</label>
          <Field name="cvv" />
          {errors.cvv && touched.cvv ? <div>{errors.cvv}</div> : null}
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;
