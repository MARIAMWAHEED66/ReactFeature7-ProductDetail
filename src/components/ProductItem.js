// Styling
import { ProductWrapper } from "../styles";
import DeleteButton from "./DeleteButton";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => props.setProduct(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={product}
        setProduct={props.setProduct}
        // productId={product.id}
      ></DeleteButton>
    </ProductWrapper>
  );
};

export default ProductItem;
