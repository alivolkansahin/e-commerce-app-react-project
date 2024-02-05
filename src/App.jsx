// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { ProductsPage } from './pages/ProductsPage/ProductsPage'
import { NoPage } from './pages/NoPage/NoPage'
import { Header } from './components/Header/Header'
import Cart from './components/Cart/Cart'
import { CartPage } from './pages/CartPage/CartPage'
// import Footer from './components/Footer/Footer'
// ilerisi için footer eklenebilir.

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/mycart" element={<CartPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    {/* <Footer /> */}
    <Cart/>
    </BrowserRouter>
    </>
  )
}

export default App
