import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import styles from "@styles/MobileMenu.module.scss";

const MobileMenu = () => {
  return (
    <div className={styles.MobileMenu}>
      <div className="mobile-menu inactive disp-none-mob">
        <ul>
          <li>
            <a className="title">CATEGORIES</a>
          </li>

          <li>
            <a href="/">All</a>
          </li>

          <li>
            <a href="/">Clothes</a>
          </li>

          <li>
            <a href="/">Electronics</a>
          </li>

          <li>
            <a href="/">Furnitures</a>
          </li>

          <li>
            <a href="/">Toys</a>
          </li>

          <li>
            <a href="/">Others</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">My orders</a>
          </li>

          <li>
            <a href="/">My account</a>
          </li>
        </ul>
        <ul>
          <li className="email">
            <a href="/">Platzi@example.com</a>
          </li>

          <li className="sign-out">
            <a href="/">
              Sign out <FaSignOutAlt />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
