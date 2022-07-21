import React from 'react'
import Product from '../components/Product'
import { addProduct, getProduct } from '../redux/action'
import styles from "../components/product.module.css"
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import axios from 'axios'
import ProductTitle from '../components/ProductTitle'

const Makeup_Products = () => {
 
    let products= useSelector((state)=>state.products)
    
    let dispatch= useDispatch()
    useEffect(()=>{
      dispatch(getProduct('makeup'))
    },[])

    const handleChange= (e)=>{
      axios.get(`http://localhost:8080/products/makeup?sort=${e.target.value}`)
      .then(({data})=>dispatch(addProduct(data)))
    }

  return (
    <div className={styles.mainproductdiv} >
      <ProductTitle image={"https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg"} />
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
 
  )
}

export default Makeup_Products