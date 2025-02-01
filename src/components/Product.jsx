import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "font-awesome/css/font-awesome.min.css";

export default function Product({ Product }) {
  return (
    <div className="col-md-3 m-5 card p-2 text-start">
      <div>
        <Link to={`/product/${Product.id}`} style={{ textDecoration: "none" }}>
          <img src={Product.image} className="img-fluid" alt="images" />
          <h1>{Product.name}</h1>
          <Rating
            style={{ color: "orange" }}
            initialRating={Product.rating}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            readonly={true}
          />
          <h1>Price : {Product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
