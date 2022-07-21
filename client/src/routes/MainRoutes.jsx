import React from 'react'
import { Route, Routes } from 'react-router'
import Brush_Products from '../pages/Brush_Products'
import Cart from '../pages/Cart/Cart'
import Makeup_Products from '../pages/Makeup_Products'
import ProductDetail from '../pages/ProductDetail'
import Skincare_products from '../pages/Skincare_products'
function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/brush-products' element={<Brush_Products/>}/>
            <Route path='/makeup-products' element={<Makeup_Products/>}/>
            <Route path= '/skincare-products' element={<Skincare_products/>}/>
            <Route path= '/product/:id' element={<ProductDetail/>}/>
            <Route path= '/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes