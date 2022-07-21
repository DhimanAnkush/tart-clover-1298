import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import { getProduct } from '../redux/action'
import styles from "../components/product.module.css"

const Skincare_products = () => {
    let products= useSelector((state)=>state.products)
    
    let dispatch= useDispatch()
    useEffect(()=>{
      dispatch(getProduct('skincare'))
    },[])

  return (
    <div className={styles.productcontainer} >
       
      {
        products.map((el,index)=>{
          return <Product key={index} {...el}/>
        })
      }

    </div>
  )
}

export default Skincare_products