import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Product from './Product'
import styles from "../components/product.module.css";
const Recommended = () => {
    const [recoom,setRecoom]= useState([])
    useEffect(()=>{
       axios.get(`http://localhost:8080/products/search/gift`)
       .then(({data})=>setRecoom(data))
    },[])
  return (
    <>
    <h1>Top Recommended gift cards</h1>
    <div className={styles.productcontainer}>
        {recoom.map((el, index) => {
        return <Product key={index} {...el} />;
        })}
    </div>
    </>
   
  )
}

export default Recommended