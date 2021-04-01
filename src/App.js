import React, {useState} from 'react';
import Products from './components/Products'
import NavBar from './components/NavBar/NavBar'
import HeroHeader from './components/Hero/HeroHeader';
import ViewProduct from './components/ViewProducts/ViewProducts'

const App = () => { 
    
    return (
        <div style={{position:'relative', width: '100%', overflow:'hidden'}}>
            <NavBar />
            <HeroHeader />
            <Products />
        </div>
    )
}

export default App
