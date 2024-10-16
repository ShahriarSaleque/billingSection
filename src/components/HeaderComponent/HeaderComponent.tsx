import React from 'react';
import styles from './HeaderComponent.module.scss'; 

const HeaderComponent = () => {
  return (
    <div>
        <div className={styles['header']}>
            Billing Information
        </div>
        <div className={styles['text']}>
            Update your billing details and address
        </div>
    </div>
  )
}

export default HeaderComponent