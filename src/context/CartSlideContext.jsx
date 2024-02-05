import { createContext, useState } from "react";

export const CartSlideContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartSlideContextProvider = ({children}) => {

    const [isCartButtonClicked, setCartButtonIsClicked] = useState(false);

    return (
        <CartSlideContext.Provider value={{isCartButtonClicked, setCartButtonIsClicked}}>
            {children}
        </CartSlideContext.Provider>
    )
}