
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  relative: {
    marginTop: '1.5em',
  },
  root: {
    boxShadow: 'none',
  },

  media: {
    objectFit: 'contain', 
    width: '100%',
    height: '350px'
  },

  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    maxWidth:"100%", 
    height: '100%',
    paddingTop: '2em'
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
    flexDirection:'column', 
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '10em',
    width: '100%',
    paddingTop: '2em'
  },

  viewOptionsButton: {
    padding: '10px 30px',
    fontSize: '.6rem',
    borderRadius: "1px",
    backgroundColor: 'black',
    marginTop: '1em'
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