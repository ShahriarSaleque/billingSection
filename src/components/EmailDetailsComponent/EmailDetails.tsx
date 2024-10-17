import React from 'react';
import styles from '../PaymentDetailsComponent/PaymentDetailsContainer.module.scss';
import { Field } from 'formik';

const EmailDetails = ({ errors, touched }: EmailDetailsProps) => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Email details</div>
      <div className={styles['form-container']}>
        <div className={styles['input-component']}>
          <div>
            <label htmlFor="email">Email address</label>
          </div>
          <div>
            <Field name="email" placeholder="user@example.com" />
          </div>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </div>
      </div>
    </div>
  );
};

type EmailDetailsProps = {
  errors: any;
  touched: any;
};

export default EmailDetails;
