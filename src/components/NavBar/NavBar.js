import React, {useState} from 'react'
import {AppBar, Toolbar,Badge, IconButton, Typography} from '@material-ui/core'
import {Menu, ShoppingCart} from '@material-ui/icons'
import {useStyles} from './NavBarStyles'
const NavBar = () => {
    const classes = useStyles()
    const [currentColor, setCurrentColor] = useState(classes.navLight)


    return (
        <AppBar className={currentColor} >
            <Toolbar className={classes.nav}>
                <IconButton edge="start" size="medium">
                    <Menu style={{ color: 'white' }} /> 
                </IconButton>
                <Typography variant="h4">FLOW</Typography>
                <IconButton size="medium">
                    <Badge badgeContent={1} color='error'>
                        <ShoppingCart style={{ color: 'white' }}/> 
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>    
    )
}

export default NavBar
