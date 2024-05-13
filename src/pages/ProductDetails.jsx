import { useParams } from "react-router-dom";
import { products } from "./Products";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);

  return (
    <div className="card container my-5">
      <div className="card-body">
        <h1 className="mx-4">Product Details</h1>
        <img
          src="https://placehold.co/200X200?text=Image+1"
          className="img-fluid m-4"
        />
        <img
          src="https://placehold.co/200X200?text=Image+2"
          className="img-fluid m-4"
        />
        <img
          src="https://placehold.co/200X200?text=Image+3"
          className="img-fluid m-4"
        />
      </div>
      <div className="mx-4">
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: INR {product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
