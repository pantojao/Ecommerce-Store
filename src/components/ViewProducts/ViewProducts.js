import React, { useContext, useState } from "react";
import {
  Card,
  Container,
  Button,
  IconButton,
  Box,
  Toolbar,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { commerce } from "../../CommerceInstance";
import { Add, Remove } from "@material-ui/icons";
import { UserContext } from "../../userContext";

import useStyles from "./ViewProductsStyles";

const ViewProduct = ({
  name,
  price,
  description,
  imageSource,
  hideDetails,
  productID,
}) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const { user, setUser } = useContext(UserContext);

  const changeQuanity = (expression) => {
    const newQuantity = quantity + expression;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = async () => {
    try {
      hideDetails();
      const response = await commerce.cart.add(productID, quantity);
      setUser(response.cart);
    } catch (error) {
      throw error;
    }
  };

  const checkoutCurrentItem = async () => {
    try {
      const newCart = await commerce.cart.refresh();
      const response = await commerce.cart.add({
        cart_id: newCart.id,
        id: productID,
        quantity: quantity,
      });
      if (response.success) {
        window.location.href = response.cart.hosted_checkout_url;
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Box className={classes.overlay} onClick={hideDetails}></Box>
      <Card className={classes.detailsCard}>
        <CardMedia className={classes.media} image={imageSource} />
        <Typography margin="1em" align="center">
          {name}
        </Typography>
        <Typography align="center">{price}</Typography>
        <Typography align="center">Tax Included</Typography>

        <Container>
          <Typography align="center" variant="subtitle2">
            Quantity
          </Typography>
          <Toolbar className={classes.quantityContainer}>
            <IconButton size="small" onClick={() => changeQuanity(-1)}>
              <Remove />
            </IconButton>
            <Typography variant="h6" style={{ margin: "0em 1em" }}>
              {quantity}
            </Typography>
            <IconButton size="small" onClick={() => changeQuanity(1)}>
              <Add />
            </IconButton>
          </Toolbar>
        </Container>

        <Container className={classes.actionButtons}>
          <Button
            onClick={() => addToCart(productID, quantity)}
            variant="contained"
            color="secondary"
            size='small'
          >
            Add To Cart
          </Button>

          <Button
            onClick={() => checkoutCurrentItem()}
            variant="contained"
            color="primary"
            size='small'
          >
            Buy It Now
          </Button>
        </Container>

        <div
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: `${description}` }}
        ></div>
      </Card>
    </>
  );
};

export default ViewProduct;

// <ToggleButtonGroup
// className={classes.buttonContainer}
// value={variant}
// exclusive
// onChange={changeVariant}
// aria-label="Product Variant"
// >
// <ToggleButton value={300} aria-label="300ml">
//   <Typography>Paper Back</Typography>
// </ToggleButton>

// <ToggleButton value={550} aria-label="550ml">
//   <Typography>Hard Cover</Typography>
// </ToggleButton>
// </ToggleButtonGroup>
