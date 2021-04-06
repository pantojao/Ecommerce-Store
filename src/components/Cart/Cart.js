import { Container, Typography, Button } from "@material-ui/core";
import { commerce } from "../../CommerceInstance";
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import useStyles from "./CartStyles";
const Cart = ({hideCart}) => {
  const [cart, setCart] = useState(false);
  const classes = useStyles();

  useEffect(async () => {
    const currentCart = await commerce.cart.retrieve();
    setCart(currentCart);
  }, []);

  const refreshCart = (newCart) => {
    setCart(newCart)
  }

    return cart && (
      <>
        <Container className={classes.overlay} onClick={hideCart}/> 
        <Typography variant='h2' align='center'>Your Cart</Typography>
        <Container className={classes.cartDetails}>
          {cart.line_items.map((product) => {
            return (
              <CartItem
                productID={product.id}
                name={product.name}
                media={product.media.source}
                price={product.price.formatted_with_symbol}
                quantity={product.quantity}
                refreshCart={refreshCart}
              />
              )
            })
          }
          <Typography variant="subtitle2" align='center'>Subtotal</Typography>
          <Typography variant='h6' align='center'>{cart.subtotal.formatted_with_symbol}</Typography>
          <Button color="primary" variant='contained' size='large' className={classes.checkoutButton}>Check Out</Button>
         </Container> 


     </> 
   ) 
};

export default Cart;
