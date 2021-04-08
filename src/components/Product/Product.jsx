import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Slide,
  CardActionArea,
  Container,
} from "@material-ui/core";
import useStyles from "./ProductStyles";
import ViewProduct from "../ViewProducts/ViewProducts";

const Product = ({ name, price, description, imageSource, productID}) => {
  const classes = useStyles();
  const [showDetails, setShowDetails] = useState(false);

  const changeDisplay = () => {
    if (showDetails){
      document.body.style.overflow = 'auto' 
    } else { 
      document.body.style.overflow = 'hidden' 
    }
    setShowDetails(!showDetails)
  }

  return (
      <Container className={classes.relative}>
        <Card className={classes.root}>
          <CardActionArea className={classes.cardActions}>
            <CardMedia className={classes.media} image={imageSource} component='img' />
            <CardContent className={classes.cardContent}>
              <Typography align="center" className={classes.productName}>{name}</Typography>
              <Typography className={classes.productPrice}>
                From {price}
              </Typography>
              <Button
                onClick={() => changeDisplay()}
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
      
        <Slide direction="left" in={showDetails} timeout={500} >
            <div className={classes.detailsContainer}>
              <ViewProduct
                name={name}
                price={price}
                description={description}
                imageSource= {imageSource}
                hideDetails={() => changeDisplay()}
                productID={productID}
              />
            </div>
        </Slide>
      </Container>
  ) 

};

export default Product;
