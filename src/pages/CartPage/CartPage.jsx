import { useSelector } from 'react-redux';
import styles from './CartPage.module.css'
import ProductCard from '../../components/ProductCard/ProductCard';

export function CartPage () {

  const cartProducts = useSelector(state => state.cartProducts);


  return <main className={styles.main}>
    {cartProducts.length > 0 ? 
    <>
      <h1>YOUR CART CONTAINS {cartProducts.length} PRODUCT. (Sayfa düzenlenecek)</h1>
      <div className={styles["cart-products"]}>
        {cartProducts.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </>
      :
      <div className={styles['cart-empty']}>
        <h1>YOUR CART IS EMPTY...</h1>
        <h2>Add products to your cart first ^^</h2>
      </div>
    }
    
  </main>
}