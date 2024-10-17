import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PaymentDetails from './components/PaymentDetailsComponent/PaymentDetails';
import AddressDetails from './components/AddressDetailsComponent/AddressDetails';
import EmailDetails from './components/EmailDetailsComponent/EmailDetails';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const billingValidationSchema = Yup.object().shape({});

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
        }}
        validationSchema={billingValidationSchema}
        onSubmit={(values) => {
          console.log('values', values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <PaymentDetails errors={errors} touched={touched} />

            <div className="horizontal-rule">
              <hr />
            </div>

            <EmailDetails errors={errors} touched={touched} />

            <div className="horizontal-rule">
              <hr />
            </div>

            <AddressDetails errors={errors} touched={touched} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
