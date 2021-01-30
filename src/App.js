// Styling
import { GlobalStyle, ThemeButton } from "./styles";

import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import products from "./products";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  const [product, setProduct] = useState(null);

  const [_product, setProducts] = useState(products);

  const setView = () => {
    if (product !== null)
      return (
        <ProductDetail
          product={product}
          setProduct={setProduct}
          deleteProduct={deleteProduct}
        />
      );
    else
      return (
        <ProductList
          setProduct={setProduct}
          products={_product}
          deleteProduct={deleteProduct}
        />
      );
  };

  const deleteProduct = (productId) => {
    const newList = _product.filter((product) => product.id !== productId);
    setProducts(newList);
    setProduct(null);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Home />
      <ProductList />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
