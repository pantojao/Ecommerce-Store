import { Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette: {
        primary: { 
            main: 'rgb(0,0,0)'
        },
        secondary: {
            main: 'rgb(207, 205, 204)'
        },
        success: {
            main: 'rgb(229,57,53)'
        }
    },

    typography: {
        fontFamily:[ 'PT Serif', 'sans-serif'].join(',')
    }
})