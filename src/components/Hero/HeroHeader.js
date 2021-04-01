import React from 'react'
import {Box, Container, Button, Typography} from '@material-ui/core'
import {useStyles} from './HeroStyles'
const HeroHeader = () => {
    const classes = useStyles()
    return (
        <Box maxWidth="sm" className={classes.root}>
            <Container className={classes.heroContent}>
                <Typography variant="h4" align='right'>100% Organic Goodness</Typography>
                <Typography variant="subtitle2" align="right">Where we do things differently. 100% organic smoothies and cold pressed juices is our thing.</Typography>
                <Button>
                    Shop Now
                </Button>
            </Container>
        </Box>
    )
}

export default HeroHeader 