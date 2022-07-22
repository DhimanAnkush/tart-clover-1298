import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import { addProduct, getProduct } from '../redux/action'
import styles from "../components/product.module.css"
import axios from 'axios'
import ProductTitle from '../components/ProductTitle'


const Skincare_products = () => {
    let products= useSelector((state)=>state.products)
    
    let dispatch= useDispatch()
    useEffect(()=>{
      dispatch(getProduct('skincare'))
    },[])

    const handleChange= (e)=>{
      axios.get(`http://localhost:8080/products/skincare?sort=${e.target.value}`)
      .then(({data})=>dispatch(addProduct(data)))
    }

  return (

    <>
    <ProductTitle image={"https://d32baadbbpueqt.cloudfront.net/Collection/1c906769-7b7f-4589-8bf6-a089d9c6cebb.gif"}/>
    <div className={styles.mainproductdiv}>
      
      <select name="sort" onChange={handleChange} >
       <option value="relevance">Relevance</option>
      <option value="h2l">Price- High to low</option>
      <option value="l2h">Price- Low to high</option>
      </select>

      <div className={styles.productcontainer} >
         {
           products.map((el,index)=>{
             return <Product key={index} {...el}/>
           })
         }
       </div>
   </div>
    </>
 
   
  )
}

export default Skincare_products