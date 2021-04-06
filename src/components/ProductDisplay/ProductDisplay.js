import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import Product from "../Product/Product";

const ProductDisplay = ({productInfo, filter}) => {
    console.log(productInfo)
    return (
      <main style={{maxWidth: "100%", position: 'relative', paddingTop: '2em'}} >
        <Typography align='center' variant='h3'>Our Top Picks</Typography>
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
                  productID={product.id}
                />
              </Grid>
            );
          })}
        </Grid>
      </main>
    )
}

export default ProductDisplay