import React, { useContext } from "react";
import close from "@icons/icon_close.png";
import AppContext from "../context/AppContext";
import Image from "next/image";
import styles from "@styles/OrderItem.module.scss";

function OrderItem({ product }) {
  const { removeFromCart } = useContext(AppContext);
  return (
    <div className={styles['order-item']}>
      <figure>
        <Image src={product?.images[0]} className={styles["order-img"]} alt="product-img" />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image
        src={close}
        className={styles["image-close"]}
        alt="close"
        onClick={() => removeFromCart(product)}
        width={15}
        height={15}
      />
    </div>
  );
}

export default OrderItem;
