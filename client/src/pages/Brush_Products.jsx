import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import Product from '../components/Product'
import { addProduct, getProduct } from '../redux/action'
import styles from "../components/product.module.css"
import axios from 'axios'
import ProductTitle from '../components/ProductTitle'
import { useParams } from 'react-router'
import { BiMenuAltLeft } from "react-icons/bi"
const Brush_Products = () => {
  const params= useParams();
  const{sub}= params;
    let products= useSelector((state)=>state.products)
    let dispatch= useDispatch()
    useEffect(()=>{
      if(sub){
        dispatch(getProduct(`brushes/${sub}`))
      }else{
        dispatch(getProduct('brushes'))
      }
    },[sub])
  
    const handleChange= (e)=>{
      axios.get(`http://localhost:8080/products/brushes?sort=${e.target.value}`)
      .then(({data})=>dispatch(addProduct(data)))
    }
  
  return (
    <>
    <ProductTitle image="https://d32baadbbpueqt.cloudfront.net/Collection/39da2bc6-d83c-4350-a2b1-0c0ec7a721a8.jpg" />
    <div className={styles.mainproductdiv} >
    <div className={styles.selectbox} style={{display:"flex"}} >
    <BiMenuAltLeft style={{fontSize:"25px"}} />
      <select name="sort" onChange={handleChange} >
        <option>Sort</option>
        <option value="relevance">Relevance</option>
       <option value="h2l">Price- High to low</option>
       <option value="l2h">Price- Low to high</option>
       </select>
    </div>
       
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

export default Brush_Products