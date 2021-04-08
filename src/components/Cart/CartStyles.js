import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  cartHeader: { 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginTop: '1em'
  },
  cartDetails: {
    position: "fixed",
    height: "100vh",
    width: "60%",
    overflow: "auto",
    top: "0",
    right: "0",
    backgroundColor: "white",
    zIndex: "100",
  },
  overlay: {
    backgroundColor: "transparent",
    width: "100vw",
    height: "100vh",
    zIndex: "5",
    position: "fixed",
    left: "0",
    top: "0",
  },

  cartItem: {
    position: 'relative',
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: 'center',
    height: "auto",
    overflow: 'hidden',
    margin: "1.5em auto",
    padding: ".5em",

  },
  cartItemImage: {
    width: "150px",
    objectFit: "contain",
    display: "block",
  },

  cartItemInfo: {
    width: "70%",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  
  quantityContainer: {
    width: "125px",
    margin: '0 auto' 
  },

  checkoutButton: {
    display: "block",
    margin: "1em auto",
  },

  clear: {
    position: 'absolute',
    right: '1%',
    top: '1%'
  },

  "@media (max-width: 700px)": {
    cartDetails: {
      width: '80%', 
    },
    cartItemInfo: {
      width: "90%",
    },
    cartItemImage: {
      marginBottom: '1em'
    },
    
  },
}));
