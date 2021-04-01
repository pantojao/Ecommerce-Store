import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  detailsCard: {
    position: 'fixed',
    boxSizing: 'border-box',
    height: '100vh',
    width: '40%',
    overflow: 'hidden',
    top: '0',
    right: '0',
    backgroundColor: 'lightblue',
    zIndex: '100',
  },
  media: {
    margin: '1em auto', 
    height: '50%',
    width: '55%'
   
  },

  buttonContainer: {
    display: 'flex',
    flexWrap: 'row wrap',
    justifyContent: 'space-evenly',
    margin: '0 auto',
    outline: '2px red solid'
  },
  amountButton: {
    
  }
}));