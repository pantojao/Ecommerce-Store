import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  cartDetails: {
    position: "fixed",
    height: "100vh",
    width: "70%",
    overflow: "auto",
    top: "0",
    right: "0",
    backgroundColor: "white",
    zIndex: '100'
  },
  overlay: {
    backgroundColor: 'transparent', 
    width: '100vw',
    height: '100vh',
    zIndex: '5',
    position: 'fixed',
    left: '0',
    top: '0'
  },
  cartItem: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      height: '300px',
      width: '100%',
      margin: '1.5em auto',
      padding: '.5em',
  },
  cartItemImage: {
    width: "20%",
    objectFit: 'contain',
    display: 'block',
    maxHeight: '100%'
  },

  cartItemInfo: {
    width: '70%',
    maxHeight: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-evenly', 
    alignItems: 'center',
  },
  quantityContainer: {
      width: '125px', 
      margin: '0 auto'
  }, 
  checkoutButton: { 
    display: 'block',
    margin: '1em auto'
  }
}));
