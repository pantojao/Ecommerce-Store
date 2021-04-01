import React from 'react'
import {AppBar, Toolbar,Badge, IconButton, Typography} from '@material-ui/core'
import {Menu, ShoppingCart} from '@material-ui/icons'
import {useStyles} from './NavBarStyles'
const NavBar = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.navLight} position="relative">
            <Toolbar className={classes.nav}>
                <IconButton edge="start" size="medium">
                    <Menu style={{ color: 'white' }} /> 
                </IconButton>
                <Typography variant="h4">FLOW</Typography>
                <IconButton size="medium">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCart style={{ color: 'white' }}/> 
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>    
    )
}

export default NavBar
