import React, {useState} from 'react';
import Products from './components/Products'
const App = () => { 
    const [data, setdata] = useState(initialState)
    
    return (
        <div className="app">
            <Products /> 
        </div>
    )
}
===

export default App