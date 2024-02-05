import { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { resetCart } from '../../redux/actions';
import {useNavigate} from 'react-router-dom';
import { CartSlideContext } from '../../context/CartSlideContext';

const Cart = () => {

  const dispatch = useDispatch();
  const {isCartButtonClicked} = useContext(CartSlideContext);
  const cartProducts = useSelector(state => state.cartProducts);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const navigate = useNavigate();
  const cartPageEndPoint = "/mycart";
  

  useEffect(()=>{
    let totalPrice = 0;
    cartProducts.forEach((product) => totalPrice += (product.price * product.amount));
    setCartTotalPrice(totalPrice);
  },[cartProducts, setCartTotalPrice]);

  const handleEmptyCart = () => {
    dispatch(resetCart());
  }

  // Burda sayfanın en yukarısına çıkma eklenebilir sepet çok uzadıysa eğer...
  const handleGoToCart = () => {
    navigate(cartPageEndPoint);
  }

  return (
    <div className={`${styles["cart-outer-container"]} ${isCartButtonClicked ? styles.show : ''}`}>
      <div className={styles["cart-inner-container"]}>
        <div className={styles["cart-products"]}>
          {cartProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
        <div className={styles['cart-actions']}>
          <div className={styles['cart-total-price']}>
            {cartProducts.length > 0 ? 
            <span>Total Price: ${cartTotalPrice}</span> 
            : 
            <span></span>}
          </div>
          <div className={styles['cart-buttons']}>
          {cartProducts.length > 0 ? 
            <button className={styles['empty-button']} onClick={handleEmptyCart}>Empty Cart(Satın Al)</button> 
            : 
            <span></span>}   
            <button className={styles['go-to-cart-button']} onClick={handleGoToCart}>Go To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart