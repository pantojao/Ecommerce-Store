import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  cartDetails: {
    position: "fixed",
    height: "100vh",
    width: "70%",
    overflow: "auto",
    top: "0",
    right: "0",
    zIndex: "100",
    backgroundColor: "white",
  },

  cartItem: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      height: '300px',
      width: '100%',
      outline: '2px yellow solid'
  },

  cartItemImage: {
    position: 'relative', 
    height: "100%",
    width: "20%",
    maxWidth: '100%',
    objectFit: 'contain',
    outline: '2px red solid',
    margin: '0em'
    
  },
  cartItemInfo: {
      position: 'relative'
  },
  clear: {position: 'relative'},
}));
