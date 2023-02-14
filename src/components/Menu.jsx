import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import styles from '@styles/DesktopMenu.module.scss';

function Menu() {
  return (
    <div class={styles.DesktopMenu}>
      <ul>
        <li>
          <Link className={styles.title} href="/orders">
            My orders
          </Link>
        </li>

        <li>
          <Link href="/account">My account</Link>
        </li>

        <li>
          <Link href="/">
            Sign out <FaSignOutAlt />{' '}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
