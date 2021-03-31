import React from 'react'
import {Box} from '@material-ui/core'
import {useStyles} from './HeroStyles'
const HeroHeader = () => {
    const classes = useStyles()
    return (
        <Box maxWidth="sm" className={classes.root}>
        </Box>
    )
}

export default HeroHeader 