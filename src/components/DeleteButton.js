import { ThemeButton } from "../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.product.id);
    props.setProduct(null);
  };

  return <ThemeButton onClick={handleDelete}>Delete</ThemeButton>;
};

export default DeleteButton;
