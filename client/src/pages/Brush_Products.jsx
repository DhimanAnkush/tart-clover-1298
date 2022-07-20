import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import Product from '../products_components/Product'
import { getProduct } from '../redux/action'
import styles from "../products_components/product.module.css"
const Brush_Products = () => {
    let products= useSelector((state)=>state.products)
    
    let dispatch= useDispatch()
    useEffect(()=>{
      dispatch(getProduct('brushes'))
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

export default Brush_Products