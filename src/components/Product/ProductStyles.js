import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    boxShadow: 'none',
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
    fontSize: '.9rem',
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
  }
}));