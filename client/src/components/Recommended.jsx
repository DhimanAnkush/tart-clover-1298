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
    <div style={{marginTop:"50px"}} >
    <h3 style={{width:"90%", margin:"auto", fontSize:"25px"}} >Top Recommended gift cards</h3>
    <div className={styles.productcontainer}>
        {recoom.map((el, index) => {
        return <Product key={index} {...el} />;
        })}
    </div>
    </div>
   
  )
}

export default Recommended