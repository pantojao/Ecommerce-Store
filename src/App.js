import React, { useRef, useState, useEffect } from "react";
import Products from "./components/ProductDisplay/Products";
import NavBar from "./components/NavBar/NavBar";
import HeroHeader from "./components/Hero/HeroHeader";
import { theme } from "./MyTheme";
import { ThemeProvider } from "@material-ui/core";
import { commerce } from "./CommerceInstance";
import { Switch, useLocation } from "react-router-dom";
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
    console.log(category)
    if (category.length) {

      const productList = await commerce.products.list({'category_id': [category[0].id], 'limit': 5});
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
    console.log('changes url')
    const currentCategory = await fetchCurrentCategory(categories)
    fetchProducts(currentCategory)
  }, [location]);


  return products ? (
    <ThemeProvider theme={theme}>
      <NavBar />

      <Switch path="/">
        <ProductDisplay productInfo={products.data} />
      </Switch>

      {/* <Switch exact path="/">
        <div
          style={{ position: "relative", width: "100%", overflow: "hidden" }}
        >
          <HeroHeader
            scrollToProducts={() => scrollToProducts(productsElement)}
          />
          <Products reference={productsElement} productInfo={products.data} />
        </div>
      </Switch> */}
    </ThemeProvider>
  ) : null;
};

export default App;
