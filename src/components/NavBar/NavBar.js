import React, {useState} from 'react'
import {Slide} from '@material-ui/core'
import {AppBar, Toolbar,Badge, IconButton, Typography} from '@material-ui/core'
import Cart from '../Cart/Cart.js'
import {Menu, ShoppingCart} from '@material-ui/icons'
import {useStyles} from './NavBarStyles'
const NavBar = () => {
    const classes = useStyles()
    const [currentColor, setCurrentColor] = useState(classes.navLight)
    const [showCart, setShowCart] = useState(false)

    return (
        <>
        <AppBar className={currentColor} >
            <Toolbar className={classes.nav}>
                <IconButton edge="start" size="medium">
                    <Menu style={{ color: 'white' }} /> 
                </IconButton>
                <Typography variant="h4">FLOW</Typography>
                <IconButton size="medium" onClick={() => setShowCart(!showCart)}>
                    <Badge badgeContent={1} color='error'>
                        <ShoppingCart style={{ color: 'white' }}/> 
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>    
        
            {showCart ?
            <Slide direction="left" in={showCart} timeout={500} >
                <div className={classes.cartContainer} onClick={() => setShowCart(!showCart)}>
                    <Cart /> 
                </div>
            </Slide>
            : null }        
        </>
    )
}

export default NavBar
