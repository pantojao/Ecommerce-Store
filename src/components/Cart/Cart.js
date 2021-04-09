import { Container, Typography, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../userContext";
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; 
import CartItem from "./CartItem";
import useStyles from "./CartStyles";

const Cart = ({ hideCart }) => {
  const { user} = useContext(UserContext);
  const classes = useStyles();
  

  return (
    <>
      <Container className={classes.cartDetails}>
        <Container className={classes.cartHeader} onClick={hideCart}>
          <Typography variant="h3" align="center">
            Your Cart
          </Typography>
          <ExitToAppIcon fontSize='medium'/>
        </Container>

        {user.line_items.map((product) => {
          return (
            <CartItem
              productID={product.id}
              name={product.name}
              media={product.media.source}
              price={product.price.formatted_with_symbol}
              currentQuantity={product.quantity}
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
      <Container className={classes.overlay} onClick={hideCart} />
    </>
  )
};

export default Cart;
