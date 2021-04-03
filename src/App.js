import React, {useRef} from 'react';
import Products from './components/Products'
import NavBar from './components/NavBar/NavBar'
import HeroHeader from './components/Hero/HeroHeader';
import ViewProduct from './components/ViewProducts/ViewProducts'
import {theme} from './MyTheme';
import {ThemeProvider} from '@material-ui/core'

const App = () => { 
    const scrollToProducts = (ref) =>  ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const productsElement = useRef()
    return (
        <ThemeProvider theme={theme}> 
            <div style={{position:'relative', width: '100%', overflow:'hidden'}}>
                <NavBar  />
                <HeroHeader scrollToProducts = {() => scrollToProducts(productsElement)}/>
                <Products reference={productsElement}/>
            </div>
       </ThemeProvider>  
    )
}

export default App
