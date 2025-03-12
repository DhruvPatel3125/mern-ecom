import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productAction";
import Product from "../components/Product";

export default function Homescreen() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.allProducts);

  // Add console.log to debug Redux state
  console.log("Redux state:", { loading, products, error });

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      {loading ? (
        <div className="loading-spinner">
          <h2>Loading...</h2>
        </div>
      ) : error ? (
        <div className="error-message">
          <h2>Error: {error}</h2>
        </div>
      ) : (
        <div className="row">
          {products?.map((product) => (
            <div className="col-md-3 mb-4" key={product._id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
