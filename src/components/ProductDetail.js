import { DetailWrapper, ThemeButton } from "../styles";
import DeleteButton from "./DeleteButton";

const ProductDetail = (props) => {
  const product = props.product;

  return (
    <DetailWrapper>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <ThemeButton onClick={() => props.setProduct(null)}>
        Go back home!
      </ThemeButton>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={props.product}
        setProduct={props.setProduct}
        // productId={product.id}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
