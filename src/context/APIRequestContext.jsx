import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const APIRequestContext = createContext();

// eslint-disable-next-line react/prop-types
export const APIRequestContextProvider = ({children}) => {
    const[products, setProducts] = useState([]);

    const[isLoading, setIsLoading] = useState({
        reading: false,
    });

    useEffect(() => {
        const getProducts = async () => {
            try {
            setIsLoading(prevIsLoading => ({...prevIsLoading, reading: true}));
            // eslint-disable-next-line no-unused-vars
            await axios.get("https://dummyjson.com/products").then(response => {
                setProducts(response.data.products);
            });
            setIsLoading(prevIsLoading => ({...prevIsLoading, reading: false}));
            } catch (error) {
            console.log("There was an error while fetching data", error);
            }
        }; 
        getProducts();
    }, []);

    return (
        <APIRequestContext.Provider value={{products, isLoading}}>
            {children}
        </APIRequestContext.Provider>
    )
}










