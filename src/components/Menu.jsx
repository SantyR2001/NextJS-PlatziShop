import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import styles from "@styles/DesktopMenu.module.scss";

function Menu(props) {
  return (
    <div class={styles.DesktopMenu}>
      <ul>
        <li>
          <a href="/orders">My orders</a>
        </li>

        <li>
          <a href="/account">My account</a>
        </li>

        <li>
          <a href="/">
            Sign out <FaSignOutAlt />{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
