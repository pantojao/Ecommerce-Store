
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

const Product = ({name, price, description, imageSource}) => {
  const classes = useStyles();

  console.log(price)
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActions}>
        <CardMedia className={classes.media} image={imageSource} /> 
        <CardContent className={classes.cardContent}>
          <Typography className={classes.productName}>{name}</Typography>
          <Typography className={classes.productPrice}>From ${price}</Typography>
          <Button className={classes.viewOptionsButton} size="small" variant="contained" color="primary">
            View Options
          </Button>
        </CardContent>
      </CardActionArea>
    </Card> 
  )
};

export default Product;
