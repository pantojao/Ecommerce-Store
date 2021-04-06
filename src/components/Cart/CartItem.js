import { Paper, Container, IconButton, CardMedia, Typography } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from './CartStyles.js'
import React from 'react'


const CartItem = ({productID, name, media, price, quanitity}) => {
    const classes = useStyles()

    return (    
    <>
        <Paper className={classes.cartItem}>
            <CardMedia image={media} component="img" className={classes.cartItemImage}/> 
            <Container className={classes.cartItemInfo}>
                <Typography align='center' variant='subtitle1'>{name}</Typography>
                <Typography align='center' variant='subtitle2'>{price}</Typography>
            </Container>
            <IconButton className={classes.clear}>
                <ClearIcon />
            </IconButton>

        </Paper>
    </>
    )
}

export default CartItem
