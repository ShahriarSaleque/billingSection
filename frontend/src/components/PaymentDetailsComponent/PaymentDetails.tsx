import React from 'react';
import styles from '../ComponentStyling.module.scss';
import PaymentForm from './PaymentForm';

const PaymentDetails = ({
  errors,
  touched,
  setFieldValue,
  values,
}: PaymentDetailsProps) => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Payment details</div>
      <div className={styles['form-container']}>
        <PaymentForm
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          values={values}
        />
      </div>
    </div>
  );
};

export default PaymentDetails;

type PaymentDetailsProps = {
  errors: any;
  touched: any;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => any;
  values: any;
};
