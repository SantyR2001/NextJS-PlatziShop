import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import btnAdd from '@icons/bt_add_to_cart.svg';
import ProductDetail from '../containers/ProductDetail';
import defaultImage from '../assets/images/imagen-no-disponible.jpg';
import useToggleShow from '../hooks/useToggleShow';
import btnAdded from '@icons/bt_added_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductList.module.scss';

function ProductItem({ product }) {
  const { addToCart, removeFromCart, state } = useContext(AppContext);
  const { toggleShow, toggleState } = useToggleShow(state.toggleState);
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = (item) => {
    if (isAdded === false) {
      addToCart(item);
      setIsAdded(true);
    } else {
      removeFromCart(item);
      setIsAdded(false);
    }
  };

  return (
    <div>
      <div className={styles['product-card']}>
        <Image
          loader={() => product.images[0]}
          onClick={() => toggleShow('showProductDetail')}
          src={product.images[0] ? product.images[0] : defaultImage}
          alt={product.title}
          width={240}
          height={240}
        />
        <div className={styles['product-card-info']}>
          <div>
            <p>${product?.price}</p>
            <p>{product?.title}</p>
          </div>
          <button onClick={() => handleClick(product)}>{!isAdded === true ? <Image src={btnAdd} alt="AddToCart" /> : <Image src={btnAdded} alt="AddToCart" />}</button>
        </div>
      </div>
      {toggleState.showProductDetail && <ProductDetail toggleShow={toggleShow} product={product} />}
    </div>
  );
}

export default ProductItem;
