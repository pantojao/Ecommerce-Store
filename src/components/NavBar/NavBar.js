import React from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {useStyles} from './NavBarStyles'
const NavBar = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.navLight} position="relative">
            <Toolbar className={classes.nav}>
                <Typography>Ecomm</Typography>
                <IconButton edge="start">
                    <Menu/> 
                </IconButton>
            </Toolbar>
        </AppBar>    
    )
}

export default NavBar
