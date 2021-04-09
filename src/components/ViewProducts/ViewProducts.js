import React, { useContext, useState } from "react";
import {
  Card,
  Container,
  Button,
  IconButton,
  Toolbar,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { commerce } from "../../CommerceInstance";
import { Add, Remove } from "@material-ui/icons";
import { UserContext } from "../../userContext";
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; 

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
  const { setUser } = useContext(UserContext);

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
      <Container className={classes.overlay} onClick={hideDetails}><div></div></Container>
      <Card className={classes.detailsCard}>
        <ExitToAppIcon className={classes.exitIcon} onClick={hideDetails} /> 
        <CardMedia className={classes.media} image={imageSource} component='img' />
        <Typography align="center">
          {name}
        </Typography>
        <br/>
        <Typography align="center">{price}</Typography>
        <Typography align="center">Tax Included</Typography>
        <br /> 
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

