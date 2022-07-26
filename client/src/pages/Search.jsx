import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Product from "../components/Product";
import styles from "../components/product.module.css";
import Recommended from "../components/Recommended";
// import SearchNotFound from "../components/SearchNotFound";

const Search = () => {
  const { search } = useParams();
  const [searchData, setsearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://sugar-cosmeticsapi.herokuapp.com/products/search/${search}`)
      .then(({ data }) => {
        setLoading(false);
        setsearchData(data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [search]);
  // if (searchData.length === 0) {
  //   return <SearchNotFound />;
  // }
  return (
    <div style={{ margin: "auto", marginTop: "40px", width: "90%" }}>
      <h2>Search Results for {search}</h2>
      {loading ? (
        <div className="w-fit m-auto">
          {/* <Spinner /> */}
          <img
            src="https://flevix.com/wp-content/uploads/2019/07/Comp-2.gif"
            alt="loader"
          />
        </div>
      ) : error ? (
        <div className="w-fit m-auto">
          <img
            src="https://t4.ftcdn.net/jpg/03/08/92/49/360_F_308924911_jsWAfFOqdSGglzvF7zcNcXIo06eS7Wch.jpg"
            alt="img"
          />
        </div>
      ) : (
        <div className={styles.productcontainer}>
          {searchData.map((el, index) => {
            return <Product key={index} {...el} />;
          })}
        </div>
      )}
      <Recommended />
    </div>
  );
};

export default Search;
