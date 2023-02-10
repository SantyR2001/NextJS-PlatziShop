import React from "react";
import ProductInfo from "../components/ProductInfo";
import imgClose from "@icons/icon_close.png";
import Image from "next/image";
import styles from "@styles/ProductDetail.module.scss";

function ProductDetail({ product, toggleShow }) {
  return (
    <aside className={styles.ProductDetail + ' inactive'}>
      <div onClick={() => toggleShow()} className="product-detail-close">
        <Image className="close-product-detail-icon" src={imgClose} alt="close" />
      </div>
      <ProductInfo product={product} />
    </aside>
  );
}

export default ProductDetail;
