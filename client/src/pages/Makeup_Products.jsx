import React from 'react'
import Product from '../components/Product'
import { getProduct } from '../redux/action'
import styles from "../components/product.module.css"
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"

const Makeup_Products = () => {
 
    let products= useSelector((state)=>state.products)
    
    let dispatch= useDispatch()
    useEffect(()=>{
      dispatch(getProduct('makeup'))
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

export default Makeup_Products