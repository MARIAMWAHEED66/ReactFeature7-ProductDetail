// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import { useState } from "react";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = props.products
    .filter((product) => product.name.includes(query))
    .map((product) => (
      <ProductItem
        product={product}
        setProduct={props.setProduct}
        key={product.id}
        deleteProduct={props.deleteProduct}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
