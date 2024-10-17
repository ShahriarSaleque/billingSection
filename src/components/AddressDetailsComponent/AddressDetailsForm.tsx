import React from 'react';
import { Field } from 'formik';
import styles from '../ComponentStyling.module.scss';

const AddressDetailsForm = ({ errors, touched }: AddressDetailsFormProps) => {
  return (
    <>
      <div className={styles['input-component']}>
        <div>
          <label htmlFor="country">Country / Region</label>
        </div>
        <div>
          <Field name="country" placeholder="United States" />
        </div>
        {errors.country && touched.country ? <div>{errors.country}</div> : null}
      </div>

      <div className={styles['input-component']}>
        <div>
          <label htmlFor="address">Address</label>
        </div>
        <div>
          <Field name="address" placeholder="Street address" />
        </div>

        {errors.address && touched.address ? <div>{errors.address}</div> : null}
      </div>

      <div className={styles['expiry-cvv-container']}>
        <div className={styles['input-component']}>
          <div>
            <label htmlFor="city">City</label>
          </div>
          <div className={styles['expiry-input']}>
            <Field name="city" placeholder="City" />
          </div>
          {errors.city && touched.city ? <div>{errors.city}</div> : null}
        </div>

        <div className={styles['input-component']}>
          <div>
            {' '}
            <label htmlFor="state">State</label>
          </div>
          <div className={styles['cvv-input']}>
            <Field name="state" placeholder="State" />
          </div>
          {errors.state && touched.state ? <div>{errors.state}</div> : null}
        </div>

        <div className={styles['input-component']}>
          <div>
            {' '}
            <label htmlFor="zip">Zip</label>
          </div>
          <div className={styles['cvv-input']}>
            <Field name="zip" placeholder="123" />
          </div>
          {errors.zip && touched.zip ? <div>{errors.zip}</div> : null}
        </div>
      </div>
    </>
  );
};

type AddressDetailsFormProps = {
  errors: any;
  touched: any;
};

export default AddressDetailsForm;
