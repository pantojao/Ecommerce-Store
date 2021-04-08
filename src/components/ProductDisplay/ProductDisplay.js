import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Product from "../Product/Product";
import { Skeleton } from "@material-ui/lab";
import useStyles from "./ProductsStyles";

const ProductDisplay = ({ reference, productInfo, genre }) => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  
  useEffect(() => {
    if (productInfo == null) setLoading(true);
    else setLoading(false);
  }, [productInfo]);

  const subjectTitle =
    genre && productInfo !== null
      ? `For ${productInfo[0].categories[0].name}`
      : "";

  return (
    <main ref={reference} className={classes.relative}>

      <Typography variant="h4" className={classes.header}>{`Our Top Picks ${subjectTitle}`}</Typography>

      <Grid container spacing={3} alignItems="center">
        {!loading
          ? productInfo.map((product, index) => {
              return (
                <Grid item xs={12} sm={6} lg={3} xl={3} key={index}>
                  <Product
                    item
                    name={product.name}
                    price={product.price.formatted_with_symbol}
                    description={product.description}
                    imageSource={product.media.source}
                    productID={product.id}
                  />
                </Grid>
              );
            })
          : Array(8)
              .fill(null)
              .map((random, index) => {
                return (
                  <Grid item xs={12} sm={6} lg={3} xl={3} key={index}>
                    <Skeleton component="Product" className={classes.skeleton}>
                      {" "}
                      <Product />{" "}
                    </Skeleton>
                  </Grid>
                );
              })}
      </Grid>
    </main>
  );
};

export default ProductDisplay;
