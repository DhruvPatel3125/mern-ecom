import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDescription() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-2 m-2">
            <h1>{product.name}</h1>
            <img
              src={product.image}
              className="img-fluid m-3 bigimg"
              alt={product.name}
            />
            <p>{product.description}</p>
          </div>
        </div>
        <div className="col-md-6 text-start">
          <div className="m-2">
            <h1>Price: ${product.price}</h1>
            <hr />
            <h1>Select Quantity</h1>
            <select>
              {[...Array(product.countInStock).keys()].map((x, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <hr />
            <button className="btn btn-dark">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
