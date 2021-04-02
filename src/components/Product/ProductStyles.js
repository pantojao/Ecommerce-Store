import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({


  root: {
    boxShadow: 'none',
    marginTop: '1.5em',

  },

  media: {
    height: '30em',
    objectFit: 'contain', 
    width: '100%'
  },

  cardActions: {
    display: 'flex',
    flexFlow: 'wrap column',
    justifyContent: 'flex-end',
    maxWidth:"100%"
  },

  productName: {
    fontSize: '.9rem',
    fontWeight: 'lighter' 
  },

  productPrice:{
    fontSize: '.8rem',
  }, 

  cardContent: {
    display: 'flex',
    flexFlow:'wrap column', 
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '10em'
  },

  viewOptionsButton: {
    padding: '10px 30px',
    fontSize: '.6rem',
    borderRadius: "1px",
    backgroundColor: 'black'
  },
  detailsContainer: {
    position:'fixed', 
    zIndex: '40', 
    top:'0', 
    right:'0', 
    width: '100vw', 
    height: '100vh'
  }

}));