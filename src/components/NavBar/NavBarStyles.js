import React from 'react'
import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles({
    nav: {
        display: 'flex', 
        justifyContent: 'space-between',
    },
    navLight: { 
        backgroundColor: 'transparent',
        color: 'white',
        position:'absolute',
        maxWidth:'100%',
    },
    navDark: {
        backgroundColor: 'black'
    }
})

