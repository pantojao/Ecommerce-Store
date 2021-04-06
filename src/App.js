import React, {useRef, useState,useEffect} from 'react';
import Products from './components/Products'
import NavBar from './components/NavBar/NavBar'
import HeroHeader from './components/Hero/HeroHeader';
import {theme} from './MyTheme';
import {ThemeProvider} from '@material-ui/core'
import { commerce } from './CommerceInstance'

const App = () => { 
    const scrollToProducts = (ref) =>  ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const productsElement = useRef()
    const [products, setProducts] = useState(false)
  

    const fetchProducts = async () => { 
        try {
            const productList = await commerce.products.list() 
            setProducts(productList)
        } catch (error) {
           throw error   
        }
    }

    useEffect(() => {
        fetchProducts() 
        console.log(products)
    },[])

    return products ? (
        <ThemeProvider theme={theme}> 
            <div style={{position:'relative', width: '100%', overflow:'hidden'}}>
                <NavBar  />
                <HeroHeader scrollToProducts = {() => scrollToProducts(productsElement)}/>
                <Products reference={productsElement} productInfo={products.data}/> 
            </div>
       </ThemeProvider>  
    ) : null
}

export default App
