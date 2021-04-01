import React, {useState} from 'react'
import {Card, Container,Button, Toolbar, Typography, CardMedia} from '@material-ui/core'
import useStyles from './ViewProductsStyles'

const ViewProduct = ({name, price, description, imageSource}) => {
    const classes = useStyles();
    console.log(imageSource)
    return (
        <Card className={classes.detailsCard} onClick = {() => console.log("clicked")}>
            <CardMedia className={classes.media} image={imageSource} />
            <Typography align='center'>{name}</Typography>
            <Typography align='center'>${price}</Typography>
            <Typography align='center'>Tax Included</Typography>
            <Container className={classes.buttonContainer}>
                <Button>330ml</Button>
                <Button>500ml</Button>
                <Button>1000ml</Button>
            </Container>
            
        </Card>
    )
}

export default ViewProduct
