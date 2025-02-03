import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productAction";
import Product from "../components/Product";

export default function Homescreen() {
  const getAllProductsstate = useSelector((state) => state.products) || {};
  const { loading = false, products = [], error = null } = getAllProductsstate;
  
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
          products.map((product) => (
            <div className="col-md-3 m-2" key={product._id}>
              <Product product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
