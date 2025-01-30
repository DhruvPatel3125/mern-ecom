import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "font-awesome/css/font-awesome.min.css";

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-5 card p-2 text-start">
      <div>
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <img src={product.image} className="img-fluid" alt="images" />
          <h1>{product.name}</h1>
          <Rating
            style={{ color: "orange" }}
            initialRating={product.rating}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            readonly={true}
          />
          <h1>Price : {product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
