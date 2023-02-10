import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import imgArrow from "@icons/flechita.svg";
import Image from "next/image";
import styles from "@styles/MyOrder.module.scss";

const MyOrder = ({ toggleShow }) => {
  const { state } = useContext(AppContext);

  const getDate = () => {
    const time = Date.now();
    const today = new Date(time);
    return today.toLocaleDateString();
  };

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles["title-container"]}>
        <Image onClick={toggleShow} src={imgArrow} alt="arrow" />
        <p className={styles["title"]}>My order</p>
      </div>
      <div className={styles["my-order-content"]}>
        {state.cart.length ? (
          <div className={styles["order-content"]}>
            {state.cart.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
        ) : (
          <p className={styles["not-orders-text"]}>You don't have orders yet</p>
        )}
        <div className={styles["bottom-container"]}>
          <div className={styles["order"]}>
            <div>
              <p>
                <span>{getDate()}</span>
                <span>{state.cart.length} articles</span>
              </p>
            </div>
            <p>Total = ${sumTotal()}</p>
          </div>
          <button className={styles["primary-button"]}>Checkout</button>
        </div>
      </div>
    </aside>
  );
};

export default MyOrder;
