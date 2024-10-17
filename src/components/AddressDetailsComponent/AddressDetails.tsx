import React from 'react';
import styles from '../ComponentStyling.module.scss';
import AddressDetailsForm from './AddressDetailsForm';

const AddressDetails = ({ errors, touched }: AddressDetailsProps) => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Address details</div>
      <div className={styles['form-container']}>
        <AddressDetailsForm errors={errors} touched={touched} />
      </div>
    </div>
  );
};

export default AddressDetails;

type AddressDetailsProps = {
  errors: any;
  touched: any;
};
