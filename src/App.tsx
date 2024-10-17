import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PaymentDetails from './components/PaymentDetailsComponent/PaymentDetails';
import AddressDetails from './components/AddressDetailsComponent/AddressDetails';
import EmailDetails from './components/EmailDetailsComponent/EmailDetails';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const billingValidationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(
      /^\d{4} \d{4} \d{4} \d{4}$/,
      'Card number must be exactly 16 digits, properly formatted'
    )
    .required('Card number is required'),
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
          city: '',
          state: '',
          zip: '',
        }}
        validationSchema={billingValidationSchema}
        onSubmit={(values) => {
          console.log('val', values);
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
