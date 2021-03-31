
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
  CardActionArea
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./ProductStyles";

const Product = ({product}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActions}>
        <CardMedia className={classes.media} image="https://cdn.shopify.com/s/files/1/1367/6069/products/strawberries_cream_front_fe664090-8950-4464-b6d3-4cc67581892f_900x.jpg?v=1579797950" /> 
        <CardContent className={classes.cardContent}>
          <Typography className={classes.productName}>Strawberries & Cream (Vitamin Enhanced)</Typography>
          <Typography className={classes.productPrice}>From $2.99</Typography>
          <Button className={classes.viewOptionsButton} size="small" variant="contained" color="primary">
            View Options
          </Button>
        </CardContent>
      </CardActionArea>
    </Card> 
  )
};

export default Product;
