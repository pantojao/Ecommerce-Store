import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
  CardActionArea,
  Container,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./ProductStyles";
import ViewProduct from "../ViewProducts/ViewProducts";

const Product = ({ name, price, description, imageSource }) => {
  const classes = useStyles();
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Container className={classes.relative}>
      <Card className={classes.root}>
        <CardActionArea className={classes.cardActions}>
          <CardMedia className={classes.media} image={imageSource} />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.productName}>{name}</Typography>
            <Typography className={classes.productPrice}>
              From ${price}
            </Typography>
            <Button
              onClick={() => setShowDetails(!showDetails)}
              className={classes.viewOptionsButton}
              size="small"
              variant="contained"
              color="primary"
            >
              View Options
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
      {showDetails ? (
        <ViewProduct
          name={name}
          price={price}
          description={description}
          imageSource= {imageSource}
        />
      ) : null}
    </Container>
  );
};

export default Product;
