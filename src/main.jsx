import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { APIRequestContextProvider } from './context/APIRequestContext.jsx'
import { ProductListingContextProvider } from './context/ProductListingContext.jsx'
import { CartSlideContextProvider } from './context/CartSlideContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIRequestContextProvider>
      <ProductListingContextProvider>
        <CartSlideContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CartSlideContextProvider>
      </ProductListingContextProvider>
    </APIRequestContextProvider>
  </React.StrictMode>,
)
