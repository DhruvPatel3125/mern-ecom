import React from "react";
import Products from "../Products";
import Product from "../components/Product";

export default function Homrscreen() {
  return (
    <div>
      <div className="row judtify-content-center">
        {Products.map((product) => {
          return (
           <Product product={product}/>
          );
        })}
      </div>
    </div>
  );
}
