import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Typography,
  Slide,
} from "@material-ui/core";
import Cart from "../Cart/Cart.js";
import {
  ShoppingCart,
} from "@material-ui/icons";
import NavigationMenu from './NavigationMenu'

import { useStyles } from "./NavBarStyles";

const NavBar = ({mutable, startingColor, endingColor}) => {
  const classes = useStyles();
  const [currentColor, setCurrentColor] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const navRef = useRef() 
  navRef.current = currentColor  

  console.log(startingColor, endingColor, currentColor)
  useEffect(() => {

    if (mutable){
      const handleScroll = () => {
        const show = window.scrollY > 670
        if (navRef.current !== show) {
          setCurrentColor(show)
        }
      }
      document.addEventListener('scroll', handleScroll) 
      return () => {document.removeEventListener('scroll', handleScroll)}
   }
  })

  return (
    <>
      <AppBar className={classes.navBar} style={{backgroundColor: currentColor ? endingColor : startingColor}}>
        <Toolbar className={classes.nav}>
          <NavigationMenu />
          <Typography variant="h4" fontStyle='bold' fontWeight={700}>FLOW</Typography>
          <IconButton size="medium" onClick={() => setShowCart(!showCart)}>
            <Badge badgeContent={1} color="error">
              <ShoppingCart style={{ color: "white" }} />
            </Badge>
          </IconButton>
        </Toolbar>

      </AppBar>

      {showCart ? (
        <Slide direction="left" in={showCart} timeout={500}>
          <div className={classes.cartContainer}>
            <Cart hideCart={() => setShowCart()} />
          </div>
        </Slide>
      ) : null}
    </>
  );
};

export default NavBar;
