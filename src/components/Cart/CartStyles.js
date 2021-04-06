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
      position: 'relative',
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
    
      height: '300px',
      width: '100%',
      margin: '1.5em auto',
      padding: '.5em'
  },

  cartItemImage: {
    height: "100%",
    width: "20%",
    objectFit: 'contain',
    
  },
  cartItemInfo: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    outline: '2px red solid'
  },
  quantityContainer: {
      outline: '2px red solid',
      width: '125px', 
      margin: '0 auto'
  }
}));
