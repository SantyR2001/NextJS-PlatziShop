import React from 'react';
import Button from './Buttons';
import imgAdd from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import defaultImage from '../assets/images/imagen-no-disponible.jpg';
import styles from '@styles/ProductDetail.module.scss';

function ProductInfo({ product }) {
  return (
    <div className={styles["product-detail"]}>
        <Image src={product.images[0] ? product.images[0] : defaultImage} className={styles["product-detail-Image"]} alt="product-image" width={360} height={300} />
      <div className={styles['product-info']}>
        <p>${product?.price}</p>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <Button>
          <Image src={imgAdd} alt="Add to cart"/>
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
