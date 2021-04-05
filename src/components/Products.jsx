import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";



const Products = ({reference, productInfo}) => {
  console.log(productInfo)
  return (
    <main  ref={reference} style={{maxWidth: "100%", position: 'relative'}} >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        {productInfo.map((product, index) => {
          return (
            <Grid item xs={12} sm ={6} lg={3} xl={3} key={index}>
              <Product
                item
                name={product.name}
                price={product.price.formatted_with_symbol}
                description={product.description}
                imageSource={product.media.source}
              />
            </Grid>
          );
        })}
      </Grid>
 
    </main>
  );
};

export default Products;
