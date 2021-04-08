import {
  Paper,
  Container,
  IconButton,
  CardMedia,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { Remove, Add } from "@material-ui/icons";
import ClearIcon from "@material-ui/icons/Clear";
import useStyles from "./CartStyles.js";
import React, { useState } from "react";


const CartItem = ({ productID, name, media, price, currentQuantity, changeQuanity, removeItem }) => {
  const classes = useStyles();
  console.log("item")
  return (
    <>
      <Paper className={classes.cartItem}>
        <CardMedia
          image={media}
          component="img"
          className={classes.cartItemImage}
        />
        <Container className={classes.cartItemInfo}>
          <Typography align="center" variant="subtitle1">
            {name}
          </Typography>
          <Typography align="center" variant="subtitle2">
            {price}
          </Typography>
          <Container>
            <Toolbar className={classes.quantityContainer}>
              <IconButton size="small" onClick={() => changeQuanity(-1, productID)}>
                <Remove />
              </IconButton>
              <Typography variant="h6" style={{ margin: "0em 1em" }}>
                {currentQuantity}
              </Typography>
              <IconButton size="small" onClick={() => changeQuanity(1, productID)}>
                <Add />
              </IconButton>
            </Toolbar>
          </Container>
        </Container>
        <IconButton className={classes.clear}>
          <ClearIcon onClick={() => removeItem(productID)} />
        </IconButton>
      </Paper>
    </>
  );
};

export default CartItem;
