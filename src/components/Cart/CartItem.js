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
import { commerce } from "../../CommerceInstance";

const CartItem = ({ productID, name, media, price, quantity, refreshCart }) => {
  const classes = useStyles();
  const [currentQuantity, setQuantity] = useState(quantity);

  const changeQuanity = async (expression) => {
    const newQuantity = currentQuantity + expression;

    if (newQuantity > 0) {
      setQuantity(newQuantity);
      await commerce.cart.update(productID, { quantity: newQuantity });
    }
  };

  const removeItem = async () => {
    const response = await commerce.cart.remove(productID);
    if (response.success) refreshCart(response.cart);
  };

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
              <IconButton size="small" onClick={() => changeQuanity(-1)}>
                <Remove />
              </IconButton>
              <Typography variant="h6" style={{ margin: "0em 1em" }}>
                {currentQuantity}
              </Typography>
              <IconButton size="small" onClick={() => changeQuanity(1)}>
                <Add />
              </IconButton>
            </Toolbar>
          </Container>
        </Container>
        <IconButton className={classes.clear}>
          <ClearIcon onClick={() => removeItem()} />
        </IconButton>
      </Paper>
    </>
  );
};

export default CartItem;
