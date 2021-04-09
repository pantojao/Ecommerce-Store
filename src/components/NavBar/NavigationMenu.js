import React, { useState } from "react";
import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItem,
  List,
  Collapse,
  ClickAwayListener,
} from "@material-ui/core";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useStyles } from "./NavBarStyles";
import {Link} from 'react-router-dom'
import { Menu as MenuIcon } from "@material-ui/icons";

const NavigationMenu = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [openGenres, setOpenGenres] = useState(false);
  const classes = useStyles();

  const handleOpen = (event) => setAnchorElement(event.currentTarget);
  const handleClose = () => setAnchorElement(null);

  const handleClickAway = () => {
    if (openGenres) setOpenGenres(false);
  };



  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        size="medium"
      >
        <MenuIcon style={{ color: "white" }} />
      </IconButton>

      <Menu
        id="simple-menu"
        className={classes.menu}
        anchorEl={anchorElement}
        onClose={handleClose}
        open={Boolean(anchorElement)}
        keepMounted
      >
        <Link to='/' className={classes.linkStyle}>
          <MenuItem>
            Home
          </MenuItem>
        </Link>

        <ClickAwayListener onClickAway={handleClickAway}>
          <MenuItem onClick={() => setOpenGenres(!openGenres)}>
            <Typography>
              Genres
            </Typography>
            {openGenres ? <ArrowLeftIcon /> : <ArrowRightIcon />}

            <Collapse
              component="li"
              in={openGenres}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                <Link to='computer-science' className={classes.linkStyle}>
                    <ListItem className={classes.nested}> Computer Science</ListItem>
                </Link>

                <Link to='/finance' className={classes.linkStyle}>
                  <ListItem className={classes.nested}> Finance </ListItem>
                </Link>
              </List>
              
            </Collapse> 
          </MenuItem>
        </ClickAwayListener>

        <MenuItem>
          <a to='about-us' href='https://www.joelpantoja.com' className={classes.linkStyle} >
             About Us
          </a>
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavigationMenu;
