import React from 'react'
import styles from "./product.module.css"
import { BsHeart } from "react-icons/bs";
import { useRef } from 'react';

const Product = ({image,title,review,price,rating}) => {
  let cartboxRef= useRef()
  const handleMouseover= ()=>{
    cartboxRef.current.style.visibility="visible";     
  }

  const handlMouseLeave= ()=>{
    cartboxRef.current.style.visibility="hidden";
  }
  return (
    <div className={styles.productbox}  onMouseEnter={handleMouseover} onMouseLeave={handlMouseLeave} >
      <div className={styles.imagebox} >
          <img src={image} alt="" />
          <h3>{title}</h3>
          <p>₹ {price}</p>
          <div style={{display:"flex", gap:"7px", alignItems:"center",justifyContent:"center"}} >
            <img  src="https://in.sugarcosmetics.com/star_filled.png" alt="star" style={{width:"20px",height:"20px"}} />
            <p>{rating} {review}</p> 
          </div>
      </div>
        <div ref={cartboxRef} className={styles.cartbox}>
          <div><BsHeart style={{margin:"auto"}}/></div>
          <p>ADD TO CART</p>
        </div>
    </div>
  )
}

export default Product