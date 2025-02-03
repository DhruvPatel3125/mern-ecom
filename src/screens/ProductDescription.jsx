import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../actions/productAction";

export default function ProductDescription() {
  const { id } = useParams(); // Get product ID from URL
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.getProductByIdReducer);
  const { loading, product, error } = productState;

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-2 m-2">
            <h1>{product.name || "Unknown Product"}</h1>
            <img
              src={product.image || "placeholder.jpg"}
              className="img-fluid m-3 bigimg"
              alt={product.name || "Product"}
            />
            <p>{product.description || "No description available."}</p>
          </div>
        </div>
        <div className="col-md-6 text-start">
          <div className="m-2">
            <h1>Price: ${product.price ?? "N/A"}</h1>
            <hr />
            <h1>Select Quantity</h1>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[...Array(Math.max(1, product?.countInStock || 0)).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            <hr />
            <button className="btn btn-dark" disabled={product.countInStock === 0}>
              {product.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
