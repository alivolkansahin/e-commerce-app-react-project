import { cartReducer } from "./reducers"
import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
    cartProducts: []
    /* yapmak istediğim payloaddan sadece product almak, amount'u kendim reducersta vermek (payloadda amount bilgisi yok)
     cartProducts: [
        {
            {product1},amount1
        }, 
        {
            {product2},amount2
        }, 
    ];  
    */
}

export const store = configureStore({
    reducer: cartReducer,
    preloadedState: defaultState
})

// const reduxStore = {
//     counter: 0,
//     cartProducts: [
//         {name: "volkan", counter: 0},
//         {name: "ali", counter: 5}  // product details fieldlarının üstüne de counter yani adet field
//     ],
// }