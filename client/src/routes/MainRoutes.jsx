import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../components/Home'
import Brush_Products from '../pages/Brush_Products'
import Cart from '../pages/Cart/Cart'
import Checkout from '../pages/Cart/Checkout'
import Gifting_Products from '../pages/Gifting_Products'
import Makeup_Products from '../pages/Makeup_Products'
import ProductDetail from '../pages/ProductDetail'
import Skincare_products from '../pages/skincare_products'
function MainRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
            <Route path='/brush-products' element={<Brush_Products/>}/>
            <Route path='/brush-products/:sub' element={<Brush_Products/>}/>
            <Route path='/makeup-products' element={<Makeup_Products/>}/>
            <Route path='/makeup-products/:sub' element={<Makeup_Products/>}/>
            <Route path= '/skincare-products' element={<Skincare_products/>}/>
            <Route path= '/gifting-products' element={<Gifting_Products/>}/>
            <Route path= '/product/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes