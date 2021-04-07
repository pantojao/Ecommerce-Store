import React, { useRef, useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroHeader from "./components/Hero/HeroHeader";
import { theme } from "./MyTheme";
import { ThemeProvider } from "@material-ui/core";
import { commerce } from "./CommerceInstance";
import { Switch, useLocation, Route } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

const App = () => {
  const [products, setProducts] = useState(false);
  const [categories, setCatagories] = useState([]);

  const location = useLocation();
  const scrollToProducts = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const productsElement = useRef();

  const fetchProducts = async (category) => {
    if (category.length) {
      const productList = await commerce.products.list({'category_id': [category[0].id]});
      setProducts(productList);
    } else {
      const productList = await commerce.products.list();
      setProducts(productList);
    }
  };

  const fetchCategories = async () => {
    const categoryList = await commerce.categories.list();
    setCatagories(categoryList.data);
    return categoryList.data
  };

  const fetchCurrentCategory = async (AllCategories) => {
    const currentSlug = location.pathname.slice(1);
    const currentCategory = AllCategories.filter((category) => {
      return category.slug == currentSlug;
    });
    return currentCategory
  }


  useEffect(async() => {
    const AllCategories = await fetchCategories();
    const currentCategory = await fetchCurrentCategory(AllCategories);
    fetchProducts(currentCategory);
  }, []);

  useEffect(async () => {
    const currentCategory = await fetchCurrentCategory(categories)
    fetchProducts(currentCategory)
  }, [location]);


  return (
    <ThemeProvider theme={theme}>
      
      <Switch>
        <Route exact path="/:category">
          <NavBar mutable={false} startingColor='black'/>
          <ProductDisplay productInfo={products ? products.data : null} genre />
        </Route>

        <Route exact path="/">
          <NavBar mutable={true} startingColor='transparent' endingColor='black'/>
          <div style={{ overflow: "hidden" }}>
            <HeroHeader scrollToProducts={() => scrollToProducts(productsElement)} />
            <ProductDisplay reference={productsElement} productInfo={products ? products.data : null} genre={false}/>
          </div>
        </Route>
      </Switch> 
    </ThemeProvider>
  ) 
};

export default App;
