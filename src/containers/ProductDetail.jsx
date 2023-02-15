import React from 'react';
import ProductInfo from '../components/ProductInfo';
import imgClose from '@icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/ProductDetail.module.scss';

function ProductDetail({ product, toggleShow }) {
  return (
    <aside className={styles['product-detail']}>
      <button onClick={() => toggleShow()} className={styles['product-detail-close']}>
        <Image className={styles['close-product-detail-icon']} src={imgClose} alt="close" width={14} height={14} />
      </button>
      <ProductInfo product={product} />
    </aside>
  );
}

export default ProductDetail;
