import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  overlay: {
    backgroundColor: 'tranparent', 
    overflow: 'scroll-x',
    width: '100vw',
    height: '100vh',
    zIndex: '5',
    position: 'fixed',
    left: '0',
    top: '0'
  },
  detailsCard: {
    position: 'fixed',
    height: '100vh',
    width: '50%',
    overflow: 'auto',
    top: '0',
    right: '0',
    zIndex: '100',
    padding: '1em',
  },
  media: {
    margin: '1.5em auto', 
    height: '50%',
    width: '55%'
  },

  buttonContainer: {
    display: 'flex',
    flexWrap: 'row wrap',
    justifyContent: 'center',
    margin: '2em auto',
  },

  actionButtons: {
    display: 'flex', 
    justifyContent: 'space-evenly',
    marginTop: '1.5em',
  
  },

  quantityContainer: {
    display: 'flex', 
    justifyContent: 'center',
  }, 
  description: { 
    margin: '3em auto', 
    lineHeight: '30px'
  },
  '@media (max-width: 600px)': {
    detailsCard: {
      width: '75%',
    },
    description: {
      fontSize: '1rem', 
  
    }
   }


}));