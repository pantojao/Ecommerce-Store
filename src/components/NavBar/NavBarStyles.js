import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles({
    nav: {
        display: 'flex', 
        justifyContent: 'space-between',
    },
    navLight: { 
        backgroundColor: 'transparent',
        color: 'white',
        position:'fixed',
        maxWidth:'100%',
        boxShadow: 'none'
    },
    navDark: {
        backgroundColor: 'white',
        color: 'black'
    }
})

