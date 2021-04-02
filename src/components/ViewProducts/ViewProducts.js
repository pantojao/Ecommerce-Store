import React, {useState} from 'react'
import {Card, Container,Button,IconButton,Box, Toolbar, Typography, CardMedia} from '@material-ui/core'
import {Add, Remove } from '@material-ui/icons'
import useStyles from './ViewProductsStyles'


const ViewProduct = ({name, price, description, imageSource, hideDetails}) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.overlay} onClick={() => hideDetails()}>
            </Box>
            <Card className={classes.detailsCard}>
                <CardMedia className={classes.media} image={imageSource} /> 
                <Typography margin="1em" align='center'>{name}</Typography>
                <Typography align='center'>${price}</Typography>
                <Typography align='center'>Tax Included</Typography> 

                <Container className={classes.buttonContainer}>
                    <Button variant="contained" color="primary">330ml</Button>
                    <Button variant="contained" color="secondary">500ml</Button>
                    <Button variant="contained" color="secondary">1000ml</Button>
                </Container>

                <Container>
                    <Typography align='center' variant="subtitle2">Quantity</Typography>
                    <Toolbar className={classes.quantityContainer}>
                        <IconButton>
                            <Remove/> 
                        </IconButton>
                        <Typography>1</Typography>
                        <IconButton>
                            <Add />
                        </IconButton>
                    </Toolbar>
                </Container>

                <Container className={classes.actionButtons} >
                    <Button variant="contained" color="secondary">Add To Cart</Button>
                    <Button variant="contained" color="primary">Buy It Now</Button>
                </Container>
            </Card>
        </>
    )
}

export default ViewProduct
