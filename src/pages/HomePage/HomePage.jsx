// import { useSelector } from 'react-redux'
import ProductList from '../../components/ProductList/ProductList'
import SliderBar from '../../components/SliderBar/SliderBar'

import styles from './HomePage.module.css'
import { useContext, useEffect} from 'react';
import { APIRequestContext } from '../../context/APIRequestContext'
import { ProductListingContext } from '../../context/ProductListingContext';

export function HomePage () {
    const {isLoading} = useContext(APIRequestContext);
    const {length, setLength} = useContext(ProductListingContext);

    // setLength(6);
    /* Warning: Cannot update a component (`APIRequestContextProvider`) while rendering a different component (`HomePage`). 
    To locate the bad setState() call inside `HomePage`, follow the stack trace as described in */
    useEffect(()=>{
        setLength(6);
    }, [setLength]);

    return (
    <main className={styles.main}>
        <SliderBar />
        {!isLoading.reading && <h2>POPULAR PRODUCTS</h2>}
        <ProductList length={length}/>
    </main>
    )
}
  