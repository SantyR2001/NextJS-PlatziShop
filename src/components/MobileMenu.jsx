import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import styles from '@styles/MobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <div className={styles.MobileMenu}>
      <div className="mobile-menu inactive disp-none-mob">
        <ul>
          <li>
            <Link className="title">CATEGORIES</Link>
          </li>

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
        <ul>
          <li>
            <Link href="/">My orders</Link>
          </li>

          <li>
            <Link href="/">My account</Link>
          </li>
        </ul>
        <ul>
          <li className="email">
            <Link href="/">Platzi@example.com</Link>
          </li>

          <li className="sign-out">
            <Link href="/">
              Sign out <FaSignOutAlt />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
