import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import productInfo from "../ProductInfo.json";
import ViewProduct from "./ViewProducts/ViewProducts"
const Products = () => {
  const [showDetails, setshowDetails] = useState(false)
  return (
    <main style={{maxWidth: "100%", position: 'relative'}}>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        {productInfo.map((product) => {
          return (
            <Grid item xs={12} sm ={6} lg={3} xl={3}>
              <Product
                item
                name={product.name}
                price={product.price}
                description={product.description}
                imageSource={product.imageSource}
                onClick={() => setshowDetails(!showDetails)}
              />
            </Grid>
          );
        })}
      </Grid>
 
    </main>
  );
};

export default Products;
