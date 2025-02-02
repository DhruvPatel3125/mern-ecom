import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productAction";
import Product from "../components/Product";

export default function Homescreen() {
  const getAllProductsstate = useSelector((state) => state.getAllProductsReducer);
  const { loading, products, error } = getAllProductsstate || { loading: false, products: [], error: null };
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          products.map((product) => {
           return <div className="col-md-3 m-2">
              <Product product={product} />
            </div>
})
        )}
      </div>
    </div>
  );
}
