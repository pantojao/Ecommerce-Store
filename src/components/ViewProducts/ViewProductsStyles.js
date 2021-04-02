import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  overlay: {
    backgroundColor: 'transparent', 
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
    width: '40%',
    overflow: 'auto',
    top: '0',
    right: '0',
    zIndex: '100',
   
  },
  media: {
    margin: '1.5em auto', 
    height: '50%',
    width: '55%'
  },

  buttonContainer: {
    display: 'flex',
    flexWrap: 'row wrap',
    justifyContent: 'space-evenly',
    margin: '2em auto',
  },

  actionButtons: {
    display: 'flex', 
    justifyContent: 'space-evenly',
    marginTop: '1.5em'
  },
  quantityContainer: {
    display: 'flex', 
    justifyContent: 'center',
  }
}));