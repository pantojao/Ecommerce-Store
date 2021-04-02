import React, {useState} from 'react';
import Products from './components/Products'
import NavBar from './components/NavBar/NavBar'
import HeroHeader from './components/Hero/HeroHeader';
import ViewProduct from './components/ViewProducts/ViewProducts'
import {theme} from './MyTheme';
import {ThemeProvider} from '@material-ui/core'

const App = () => { 
    
    return (
        <ThemeProvider theme={theme}> 
            <div style={{position:'relative', width: '100%', overflow:'hidden'}}>
                <NavBar />
                <HeroHeader />
                <Products />
            </div>
       </ThemeProvider>  
    )
}

export default App
