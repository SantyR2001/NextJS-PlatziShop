import React from 'react';
import Button from '../components/Buttons';
import Image from 'next/image';
import logoYardSale from '../assets/logos/logo_yard_sale.svg';
import styles from '@styles/Account.module.scss';

function Account(props) {
  return (
    <div className={styles.login}>
      <div className={styles['form-container']}>
        <Image src={logoYardSale} alt="logo" className={styles.logo} />
        <h1 className={styles['account-title']}>My account</h1>
        <form className={styles['form']}>
          <div>
            <label htmlFor="name" className={styles['label']}>
              {' '}
              Name{' '}
            </label>
            <input type="text" id="name" placeholder="Teff" className={styles['input']['input-name']} />
            <label htmlFor="email" className={styles['label']}>
              {' '}
              Email{' '}
            </label>
            <input type="text" id="email" placeholder="Platzi@example.com" className={styles['input']['input-email']} />
            <label htmlFor="password" className={styles['label']}>
              {' '}
              Password{' '}
            </label>
            <input type="password" id="password" placeholder="*********" className={styles['input']['input-password']} />
          </div>
          <Button children="Create" styleName={['primary-button']['login-button']} />
        </form>
      </div>
    </div>
  );
}

export default Account;
