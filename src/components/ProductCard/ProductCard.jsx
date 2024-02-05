/* eslint-disable react/prop-types */
import styles from './ProductCard.module.css';

import PlusIcon from "../../assets/plus.svg";
import MinusIcon from "../../assets/minus.svg";
import CartPlus from "../../assets/cartplus.svg";

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseProductAmount, decreaseProductAmount, removeFromCart } from "../../redux/actions"

const ProductCard = ({product}) => {

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cartProducts);
    const thisProductInCart = cartProducts.find(productInCart => productInCart.id === product.id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        console.log(cartProducts);
    }

    const handleIncreaseAmount = () => {
        dispatch(increaseProductAmount(product));
        console.log(cartProducts);
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
        console.log(cartProducts);
    }
    
    const handleDecreaseAmount = () => {
        dispatch(decreaseProductAmount(product));
        console.log(cartProducts);
    }

    return (
        <div className={styles['product-card-div']}>
            <div className={styles['product-image-div']}>
                <img src={product.images[0]} />
            </div>
            <div className={styles['product-details-div']}>
                <div className={styles['product-description-div']}>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    {/* <span>{product.rating}</span> */}
                </div>
                <div className={styles['product-price-div']}>
                    <p>Price: ${product.price}</p>
                    {/* <p>Rating: {product.rating}</p> */}
                    <div className={styles['button-div']}>
                        {!thisProductInCart ? (   
                        <div className={styles['add-to-cart-div']}onClick={handleAddToCart}>
                            <span className={styles['cart-span']}>Add To Cart</span>
                            <img src={CartPlus}></img>
                        </div>)
                        : (
                        <div className={styles['amount-div']}>
                            <img src={MinusIcon} onClick={thisProductInCart.amount === 1 ? handleRemoveFromCart : handleDecreaseAmount}></img>
                            <span className={styles['amount-span']}>{thisProductInCart.amount}</span>
                            <img src={PlusIcon} onClick={handleIncreaseAmount}></img>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard