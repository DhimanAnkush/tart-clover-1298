import React from 'react'
import styles from "./product.module.css"
import { BsHeart } from "react-icons/bs";
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import axios from "axios"
const Product = ({image,title,review,price,rating,_id}) => {
  const navigate= useNavigate()
  let cartboxRef= useRef()
  const user = JSON.parse(localStorage.getItem("userOTP"));
  const handleMouseover= ()=>{
    cartboxRef.current.style.visibility="visible";     
  }

  const handlMouseLeave= ()=>{
    cartboxRef.current.style.visibility="hidden";
  }

  const handlenavigateSingle= ()=>{
    navigate(`/product/${_id}`)
  }

  const handleaddCart= ()=>{
    axios.post(`http://localhost:8080/cart`,{user:user.userID,product:_id,quantity:1})
  }

  return (
    <div className={styles.productbox}  onMouseEnter={handleMouseover} onMouseLeave={handlMouseLeave} >
      <div className={styles.imagebox} onClick={handlenavigateSingle} >
          <img src={image} alt="" />
          <h3>{title}</h3>
          <p>₹ {price}</p>
          <div style={{display:"flex", gap:"7px", alignItems:"center",justifyContent:"center"}} >
            <img  src="https://in.sugarcosmetics.com/star_filled.png" alt="star" style={{width:"20px",height:"20px"}} />
            <p>{rating} {review}</p> 
          </div>
      </div>
        <div ref={cartboxRef} className={styles.cartbox}>
          <div><BsHeart style={{margin:"auto",fontSize:"18px",fontWeight:"border"}}/></div>
          <p onClick={handleaddCart}>ADD TO CART</p>
        </div>
    </div>
  )
}

export default Product