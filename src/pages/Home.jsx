import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-4 d-flex justify-content-center align-items-center flex-column">
      <img src="https://placehold.co/1200X400" className="img-fluid" />
      <div className="text-center my-4">
        <h1>Shopie</h1>
        <p>Welcome to the Shopie Application!</p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
      <div className="my-4 text-center">
        <div className="py-4">
          <h1>Trending</h1>
          <p>Checkout our trending products</p>
        </div>
        <div>
          <div>
            <img
              src="https://placehold.co/300X300"
              className="img-fluid mx-5 my-2"
            />
            <img
              src="https://placehold.co/300X300"
              className="img-fluid mx-5 my-2"
            />
            <img
              src="https://placehold.co/300X300"
              className="img-fluid mx-5 my-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
