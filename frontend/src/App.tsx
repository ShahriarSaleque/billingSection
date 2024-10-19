import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PaymentDetails from './components/PaymentDetailsComponent/PaymentDetails';
import AddressDetails from './components/AddressDetailsComponent/AddressDetails';
import EmailDetails from './components/EmailDetailsComponent/EmailDetails';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { validateExpiryDate } from './utils/validateExpiryDate';
import { saveInformation } from './utils/saveInformation';

const billingValidationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(
      /^\d{4} \d{4} \d{4} \d{4}$/,
      'Card number must be exactly 16 digits, properly formatted'
    )
    .required('Card number is required'),
  cardHolderName: Yup.string().required('Card holder name is required'),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Enter a valid expiration date')
    .test(
      'is-future-date',
      'Expiry date cannot be in the past',
      validateExpiryDate
    )
    .required('Expiry date is required'),
  cvv: Yup.string().required('CVV is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email address'),
});

function App() {
  return (
    <div className="container">
      <HeaderComponent />

      <Formik
        initialValues={{
          cardNumber: '',
          cardHolderName: '',
          expiryDate: '',
          cvv: '',
          email: '',
          country: '',
          address: '',
          street: '',
          city: '',
          state: '',
          zip: '',
        }}
        validationSchema={billingValidationSchema}
        onSubmit={(values) => {
          saveInformation({...values, country: 'United States'});
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            <PaymentDetails
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              values={values}
            />

            <div className="horizontal-rule">
              <hr />
            </div>

            <EmailDetails errors={errors} touched={touched} />

            <div className="horizontal-rule">
              <hr />
            </div>

            <AddressDetails errors={errors} touched={touched} />

            <div className="primary-btn">
              <button type="submit">Save changes</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
