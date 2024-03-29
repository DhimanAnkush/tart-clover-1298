import React from "react";
import Product from "../components/Product";
import { addProduct, getProduct } from "../redux/action";
import styles from "../components/product.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductTitle from "../components/ProductTitle";
import { BiMenuAltLeft } from "react-icons/bi";
const Gifting_Products = () => {
  let products = useSelector((state) => state.products);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct("gifting"));
  }, []);

  const handleChange = (e) => {
    axios
      .get(`https://sugar-cosmeticsapi.herokuapp.com/products/gifting?sort=${e.target.value}`)
      .then(({ data }) => dispatch(addProduct(data)));
  };

  return (
    <>
      <ProductTitle
        image={
          "https://d32baadbbpueqt.cloudfront.net/Collection/9e08d6b0-08e8-4894-acae-ad1fd84bc837.jpg"
        }
      />
      <div className={styles.mainproductdiv}>
        <div className={styles.selectbox} style={{ display: "flex" }}>
          <BiMenuAltLeft style={{ fontSize: "25px" }} />
          <select name="sort" onChange={handleChange}>
            <option>Sort</option>
            <option value="relevance">Relevance</option>
            <option value="h2l">Price- High to low</option>
            <option value="l2h">Price- Low to high</option>
          </select>
        </div>
        <div className={styles.productcontainer}>
          {products.map((el, index) => {
            return <Product key={index} {...el} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Gifting_Products;
