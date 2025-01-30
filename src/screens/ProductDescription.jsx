import React from "react";
import { useParams } from "react-router-dom";
import products from "../Products";

export default function ProductDescription() {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((product) => product.id === parseInt(id)); // Convert id to number

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-2 m-2">
            <h1>{product.name}</h1>
            <img
              src={product.image}
              className="img-fluid m-3 bigimg"
              alt="images"
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
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <hr />
            <button className="btn btn-dark">Add to cart</button>
          </div>
        </div>
      </div>
    </div> 
  );
}
