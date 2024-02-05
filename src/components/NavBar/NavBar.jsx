import {Link} from 'react-router-dom' 
import MyCartIcon from '../../assets/cart.svg'
import { useSelector } from 'react-redux';

import styles from './NavBar.module.css'
import { useContext } from 'react';
import { CartSlideContext } from '../../context/CartSlideContext';

const NavBar = () => {

    const cartProducts = useSelector(state => state.cartProducts);

    const {isCartButtonClicked, setCartButtonIsClicked} = useContext(CartSlideContext)

    const handleCartButtonClick = () => {
        setCartButtonIsClicked(!isCartButtonClicked);
    };

    return (
    <>
    <nav className={styles['navbar']}>
        <div className={styles['top-left-bar']}>
            <Link to="/">Home Page</Link>
            <Link to="/products">Products</Link>
        </div>
        <div>
            <h1>V-PRODUCTS</h1>
        </div>
        <div className={styles['top-right-bar']}>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <a className={styles['cart-button']} onClick={handleCartButtonClick}>
            <div className={styles['my-cart']}>     
                <span>MyCart</span>
                <div>
                    <img src={MyCartIcon}></img>
                </div> 
                {/* cartta product yoksa sepetteki ürün adetini gösteren bu divi gizle, varsa göster*/}
                <div className={`${styles['my-cart-amount']} ${cartProducts.length > 0 ? '' : styles['hidden']}`}>
                    {cartProducts.length > 0 && <span>{cartProducts.length}</span>}
                </div>
            </div>
            </a>
        </div>
    </nav>
    </>
    )
}

export default NavBar