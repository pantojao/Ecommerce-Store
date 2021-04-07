import React, { useRef, useState, useEffect } from "react";
import Products from "./components/ProductDisplay/Products";
import NavBar from "./components/NavBar/NavBar";
import HeroHeader from "./components/Hero/HeroHeader";
import { theme } from "./MyTheme";
import { ThemeProvider } from "@material-ui/core";
import { commerce } from "./CommerceInstance";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

const App = () => {
  const [products, setProducts] = useState(false);
  const location = useLocation()
  console.log(location)

  const scrollToProducts = (ref) =>
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const productsElement = useRef();

  const fetchProducts = async () => {
    try {
      const productList = await commerce.products.list();
      setProducts(productList);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
      console.log('location changed')
  }, [location])


  return products ? (
    <ThemeProvider theme={theme}>
        <NavBar />
        <Switch>
          <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <HeroHeader scrollToProducts={() => scrollToProducts(productsElement)} />
            <Products reference={productsElement} productInfo={products.data} />
          </div>
        </Switch>
        <Switch path="/finance">
          <ProductDisplay productInfo={products.data} />
        </Switch>
    </ThemeProvider>
  ) : null;
};

export default App;
