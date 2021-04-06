
import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles({
    root: { 
        background: `url('https://images.unsplash.com/photo-1567940800780-fc97bdfda133?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
        backgroundRepeat: 'none', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        position:'relative',
        height: '100vh',
        width: '100%',
        overflow:'hidden'
    },
    heroContent: {
        color: 'white',
        width: '70%',
        minHeight: '20%',
        position: 'absolute',
        top: '50vh',
        right: '5%',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-end'

    },

})
