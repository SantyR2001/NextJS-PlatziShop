import React, { useContext } from 'react';
import defaultImage from 'assets/images/imagen-no-disponible.jpg';
import close from '@icons/icon_close.png';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

function OrderItem({ product }) {
  const { removeFromCart } = useContext(AppContext);
  return (
    <div className={styles['Order-item']}>
      <figure>
        <Image src={product?.images[0] ? product?.images[0] : defaultImage} className={styles['order-img']} width={80} height={80} alt="product-img" />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={close} className={styles['image-close']} alt="close" onClick={() => removeFromCart(product)} width={15} height={15} />
    </div>
  );
}

export default OrderItem;
