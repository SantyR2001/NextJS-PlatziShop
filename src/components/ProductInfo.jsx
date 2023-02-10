import React from "react";
import Button from "./Buttons";
import imgAdd from "@icons/bt_add_to_cart.svg";
import Image from "next/image";
import styles from "@styles/ProductDetail.module.scss";

function ProductInfo({ product }) {
  return (
    <div className={styles.ProductDetail}>
      <Image src={product.images[1]} className="product-detail-Image" alt="bike" />
      <div className={styles["product-info"]}>
        <p>{product.price}</p>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <Button
          value={`Add to cart`}
          styleName="primary-button add-to-cart-btn"
          children={<Image src={imgAdd} alt="Add to cart" />}
        />
      </div>
    </div>
  );
}

export default ProductInfo;
