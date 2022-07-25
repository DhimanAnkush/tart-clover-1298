import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Product from '../components/Product';
import styles from "../components/product.module.css";
import Recommended from '../components/Recommended';
import SearchNotFound from '../components/SearchNotFound';


const Search = () => {
    const {search} = useParams();
    const [searchData,setsearchData]= useState([]);
    useEffect(()=>{
      axios.get(`https://sugar-cosmeticsapi.herokuapp.com/products/search/${search}`)
        .then(({data})=>setsearchData(data))
    },[search])
    if(searchData.length===0){
        return (
           <SearchNotFound/>
        )
    }
  return (
   <div style={{margin:"auto",marginTop:"40px", width:"90%"}}>
     <h2>Search Results for {search}</h2>
      <div className={styles.productcontainer}>
        {searchData.map((el, index) => {
        return <Product key={index} {...el} />;
        })}
      </div>
      <Recommended/>
   </div>

 
  )
}

export default Search