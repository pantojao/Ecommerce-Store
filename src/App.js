import React, {useState} from 'react';
import Products from './components/Products'
import NavBar from './components/NavBar/NavBar'
const App = () => { 
    
    return (
        <div className="app">
            <NavBar /> 
            <Products /> 
        </div>
    )
}

export default App