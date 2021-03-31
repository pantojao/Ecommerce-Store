import React from "react";
import {Grid} from "@material-ui/core";
import Product from './Product/Product'
import productInfo from '../ProductInfo.json'

const Products = () => {
  console.log(productInfo)
  return (
    <main>
        {productInfo.map((product) => {
          return (<Product />)
        })}
    </main>
  )
};

export default Products;
