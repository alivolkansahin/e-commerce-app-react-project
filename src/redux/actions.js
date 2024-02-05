export const addToCart = (payload) => ({
    type: 'ADD_TO_CART',
    payload: payload
});

export const removeFromCart = (payload) => ({
    type: 'REMOVE_FROM_CART',
    payload: payload
});

export const increaseProductAmount = (payload) => ({
    type: 'INCREASE_PRODUCT_AMOUNT',
    payload: payload
});

export const decreaseProductAmount = (payload) => ({
    type: 'DECREASE_PRODUCT_AMOUNT',
    payload: payload
});

export const resetCart = () => ({
    type: 'RESET_CART',
});

