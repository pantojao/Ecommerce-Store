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
            <Button>330ml</Button>
          </ToggleButton>

          <ToggleButton value={550} aria-label="550ml">
            <Button>500ml</Button>
          </ToggleButton>

          <ToggleButton value={1000} aria-label="1000ml">
            <Button>1000ml</Button>
          </ToggleButton>
        </ToggleButtonGroup>

        <Container>
          <Typography align="center" variant="subtitle2">
            Quantity
          </Typography>
          <Toolbar className={classes.quantityContainer}>
            <IconButton onClick={() => changeQuanity(-1)}>
              <Remove />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={() => changeQuanity(1)}>
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
