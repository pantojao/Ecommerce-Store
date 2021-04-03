import React from 'react'
import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles({
    root: { 
        background: `url('https://cdn.shopify.com/s/files/1/1367/6069/files/hero_image_final_2100x.png?v=1604314768')`,
        backgroundRepeat: 'none', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
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
