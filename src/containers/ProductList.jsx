import React from "react";
import ProductItem from "../components/ProductItem";
import { useGetProducts } from "../hooks/useGetProducts";
import styles from "../styles/ProductList.module.scss";

const API = "https://api.escuelajs.co/api/v1/products";

function ProductList(props) {
  const products = useGetProducts(API);
  return (
    <section className={styles.mainContainer}>
      <div className={styles["cards-container"]}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
