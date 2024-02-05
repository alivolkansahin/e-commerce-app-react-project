export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cartProducts: [...state.cartProducts,{...action.payload, amount: 1}]}

        case 'INCREASE_PRODUCT_AMOUNT':
            // Unexpected lexical declaration in case block.eslint no-case-declarations hatası?
            // OLD CODES...
            // let indexOfProduct = state.cartProducts.findIndex((product) => (product.id === action.payload.id));
            // let cartProducts = [...state.cartProducts];
            // let productInCart = {...cartProducts[indexOfProduct]};
            // productInCart.amount += 1;
            // (cartProducts[indexOfProduct]) = productInCart;
            // return {...state, cartProducts: cartProducts}
  
            return {...state, cartProducts: state.cartProducts.map((product) => {
                if(product.id === action.payload.id){
                    product = {...product, amount: product.amount + 1 };
                }
                return product;
            })
            };

        case 'DECREASE_PRODUCT_AMOUNT':
            return {...state, cartProducts: state.cartProducts.map((product) => {
                if(product.id === action.payload.id){
                    product = { ...product, amount: product.amount - 1 };
                }
                return product;
            })
            };

        case 'REMOVE_FROM_CART':
            return {...state, cartProducts: state.cartProducts.filter((product) => product.id !== action.payload.id)}

        case 'RESET_CART':
            return {...state, cartProducts: []};
        default:
            return state;
    }
};