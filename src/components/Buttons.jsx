import React from "react";
import styles from "@styles/Buttons.module.scss";

function Button({
  value,
  type = "button",
  styleName = "primary-button",
  children = null,
  onClick = null,
}) {
  return (
    <button onClick={() => onClick} value={value} type={type} className={styles[styleName]}>
      {children}
    </button>
  );
}

export default Button;
