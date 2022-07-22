import React from "react";
import Product from "../components/Product";
import { addProduct, getProduct } from "../redux/action";
import styles from "../components/product.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductTitle from "../components/ProductTitle";
import { useParams } from "react-router";
import { BiMenuAltLeft } from "react-icons/bi";
const Makeup_Products = () => {
  const params = useParams();
  const { sub } = params;
  let products = useSelector((state) => state.products);
  let dispatch = useDispatch();
  useEffect(() => {
    if (sub) {
      dispatch(getProduct(`makeup/${sub}`));
    } else {
      dispatch(getProduct("makeup"));
    }
  }, [sub]);

  const handleChange = (e) => {
    axios
      .get(`http://localhost:8080/products/makeup?sort=${e.target.value}`)
      .then(({ data }) => dispatch(addProduct(data)));
  };

  return (
    <>
      <ProductTitle
        image={
          "https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg"
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

export default Makeup_Products;
