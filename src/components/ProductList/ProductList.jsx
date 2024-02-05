import { useContext } from "react"

import ProductCard from "../ProductCard/ProductCard";
import { APIRequestContext } from "../../context/APIRequestContext";

import styles from './ProductList.module.css'

// eslint-disable-next-line react/prop-types
const ProductList = ({length}) => {

    const {isLoading, products} = useContext(APIRequestContext);

    const productsByRating = products.sort((product1,product2) => product2.rating - product1.rating);

    return (
        <>
        <section className={styles["product-list-section"]}>
            {isLoading.reading && <h1>LOADING PRODUCTS...</h1>}
        </section>
        <article className={styles["product-list-article"]}>
            {productsByRating.slice(0,length).map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </article>
        </>
    )
}

export default ProductList