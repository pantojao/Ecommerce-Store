import React, { useState } from "react";
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

import { Add, Remove } from "@material-ui/icons";
import useStyles from "./ViewProductsStyles";

const ViewProduct = ({
  name,
  price,
  description,
  imageSource,
  hideDetails,
}) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(550);

  const changeQuanity = (expression) => {
    const newQuantity = quantity + expression;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const changeVariant = (event, newVariant) => {
    setVariant(newVariant);
  };

  return (
    <>
      <Box className={classes.overlay} onClick={() => hideDetails()}></Box>
      <Card className={classes.detailsCard}>
        <CardMedia className={classes.media} image={imageSource} />
        <Typography margin="1em" align="center">
          {name}
        </Typography>
        <Typography align="center">${price}</Typography>
        <Typography align="center">Tax Included</Typography>

        <ToggleButtonGroup
          className={classes.buttonContainer}
          value={variant}
          exclusive
          onChange={changeVariant}
          aria-label="Product Variant"
        >
          <ToggleButton value={300} aria-label="300ml">
            <Typography>330ml</Typography>
          </ToggleButton>

          <ToggleButton value={550} aria-label="550ml">
            <Typography>500ml</Typography>
          </ToggleButton>

          <ToggleButton value={1000} aria-label="1000ml">
            <Typography>1000ml</Typography>
          </ToggleButton>
        </ToggleButtonGroup>

        <Container>
          <Typography align="center" variant="subtitle2">
            Quantity
          </Typography>
          <Toolbar className={classes.quantityContainer}>
            <IconButton size="small" onClick={() => changeQuanity(-1)}>
              <Remove />
            </IconButton>
            <Typography variant="h6" style={{margin: '0em 1em'}}>{quantity}</Typography>
            <IconButton size="small" onClick={() => changeQuanity(1)}>
              <Add />
            </IconButton>
          </Toolbar>
        </Container>

        <Container className={classes.actionButtons}>
          <Button variant="contained" color="secondary">
            Add To Cart
          </Button>
          <Button variant="contained" color="primary">
            Buy It Now
          </Button>
        </Container>
      </Card>
    </>
  );
};

export default ViewProduct;
