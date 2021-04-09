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
import { commerce } from "../../CommerceInstance";
import React, { useContext } from "react";
import { UserContext } from "../../userContext";

const CartItem = ({ productID, name, media, price, currentQuantity }) => {
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
              <Typography variant="h6" align='center' style={{margin: '0 auto'}}>
                {currentQuantity}
              </Typography>
              <IconButton size="small" onClick={() => changeQuanity(1, productID)}>
                <Add />
              </IconButton>
            </Toolbar>
          </Container>
        </Container>
        <IconButton className={classes.clear}>
          <ClearIcon fontSize="small" onClick={() => removeItem(productID)} />
        </IconButton>
      </Paper>
    </>
  );
};

export default React.memo(CartItem);
