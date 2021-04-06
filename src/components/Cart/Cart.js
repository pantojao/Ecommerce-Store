import { Container, Typography } from "@material-ui/core";
import { commerce } from "../../CommerceInstance";
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import useStyles from "./CartStyles";
const Cart = () => {
  const [cart, setCart] = useState(false);
  const classes = useStyles();

  useEffect(async () => {
    const currentCart = await commerce.cart.retrieve();
    setCart(currentCart);
    console.log(currentCart);
  }, []);

    return cart && (
        <Container className={classes.cartDetails}>
          {cart.line_items.map((product) => {
            return (
              <CartItem
                productID={product.id}
                name={product.name}
                media={product.media.source}
                price={product.price.formatted_with_symbol}
                quantity={product.quantity}
              />
              )
            })
          }
         </Container> 
   ) 
};

export default Cart;
