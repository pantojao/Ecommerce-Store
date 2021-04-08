import { Container, Typography, Button } from "@material-ui/core";
import { commerce } from "../../CommerceInstance";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../userContext";
import CartItem from "./CartItem";
import useStyles from "./CartStyles";
const Cart = ({ hideCart }) => {
  const { user, setUser } = useContext(UserContext);
  const classes = useStyles();

  const findItem = async (productID) => {
    const allItems = user.line_items;
    return allItems.find((product) => product.id == productID);
  };

  const changeQuanity = async (expression, productID) => {
    const currentItem = await findItem(productID);
    const newQuantity = currentItem.quantity + expression;


    if (newQuantity < 1) return;

    try {
      const response = await commerce.cart.update(productID, {
        quantity: newQuantity,
      });
    
      if (response.success) await setUser(response.cart);
      
    } catch (error) {
      throw error;
    }
  };

  const removeItem = async (productID) => {
    try {
      const response = await commerce.cart.remove(productID);
      if (response.success) await setUser(response.cart);
    } catch (error) {
      throw error;
    }
  };

  console.log("user before add", user)

  return user ? (
      <>
        <Container className={classes.overlay} onClick={hideCart} />
        <Typography variant="h2" align="center">
          Your Cart
        </Typography>
        <Container className={classes.cartDetails}>
          {user.line_items.map((product) => {
            return (
              <CartItem
                productID={product.id}
                name={product.name}
                media={product.media.source}
                price={product.price.formatted_with_symbol}
                currentQuantity={product.quantity}
                changeQuanity={changeQuanity}
                removeItem={removeItem}
              />
            );
          })}
          <Typography variant="subtitle2" align="center">
            Subtotal
          </Typography>
          <Typography variant="h6" align="center">
            {user.subtotal.formatted_with_symbol}
          </Typography>
          <a href={user.hosted_checkout_url}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.checkoutButton}
            >
              Check Out
            </Button>
          </a>
        </Container>
      </>
    ) : null
};

export default Cart;
