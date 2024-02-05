import { useContext, useEffect } from 'react'
import ProductList from '../../components/ProductList/ProductList'

import styles from './ProductsPage.module.css'
import { APIRequestContext } from '../../context/APIRequestContext'
import { ProductListingContext } from '../../context/ProductListingContext';

export function ProductsPage () {

    const {products} = useContext(APIRequestContext);
    const {length, setLength} = useContext(ProductListingContext);

    // setLength(products.length);
    /* Warning: Cannot update a component (`APIRequestContextProvider`) while rendering a different component (`HomePage`). 
    To locate the bad setState() call inside `HomePage`, follow the stack trace as described in */
    useEffect(()=>{
        setLength(products.length);
    },[setLength, products.length]);

    return <main className={styles.main}>
          <ProductList length={length}/>
    </main>
}
  