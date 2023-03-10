import React, { useContext } from 'react';
import Menu from './Menu';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import iconCartMenu from 'assets/icons/icon_shopping_cart.svg';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import MyOrder from '@containers/MyOrder';
import useToggleShow from '../hooks/useToggleShow';
import Link from 'next/link';
import styles from '@styles/Header.module.scss';

function Header() {
  const { state } = useContext(AppContext);
  const { toggleState, toggleShow } = useToggleShow(state.toggleState);

  return (
    <nav className={styles.nav}>
      <Image onClick={() => toggleShow('showMobileMenu')} src={iconMenu} alt="mobile-menu" className={styles.menu} />
      <div className={styles.navbarLeft}>
        <Image src={logo} alt="logo" className={styles['nav-logo']} />
        <ul className={styles['display-none-desk']}>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <ul>
          <li>
            <button onClick={() => toggleShow('showDesktopMenu')} className={styles.navbarEmail}>
              platzi@example.com
            </button>
          </li>
          <li className={styles.navbarShoppingCart}>
            <Image onClick={() => toggleShow('showCart')} className="img-shopping-cart" src={iconCartMenu} alt="shopping-cart" />
            {state?.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleState.showDesktopMenu && <Menu />}
      {toggleState.showMobileMenu && <MobileMenu />}
      {toggleState.showCart && <MyOrder toggleShow={toggleShow} />}
    </nav>
  );
}

export default Header;
