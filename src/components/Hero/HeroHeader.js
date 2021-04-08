import React from 'react'
import {Box, Container, Button, Typography} from '@material-ui/core'
import {useStyles} from './HeroStyles'


const HeroHeader = ({scrollToProducts}) => {
    const classes = useStyles()

    return (
        <Box maxWidth="sm" className={classes.root}>
            <Container className={classes.heroContent}>
                <Typography variant="h5" align='right'>Find Your Next Read</Typography>
                <Typography variant="subtitle2" align="right">We Find Must Reads So You Don't Have To</Typography>
                <Button color="secondary" variant="contained" onClick = {scrollToProducts}>
                    Shop Now
                </Button>
            </Container>
        </Box>
    )
}

export default HeroHeader 