import React from 'react'
import styles from "./product.module.css"

const Product = ({image,title,review,price,rating}) => {
  return (
    <div className={styles.productbox} >
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>₹ {price}</p>
        <div style={{display:"flex", gap:"7px", alignItems:"center"}} >
            <img  src="https://in.sugarcosmetics.com/star_filled.png" alt="star" style={{width:"20px",height:"20px"}} />
            <p>{rating} {review}</p> 
        </div>
    </div>
  )
}

export default Product