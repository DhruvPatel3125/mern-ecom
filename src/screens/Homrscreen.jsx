import React from "react";
import axios from "axios";
import Product from "../components/Product";
import { useEffect,useState } from "react";

export default function Homrscreen() {

  const [products, setProducts] = useState([]); 

  useEffect(() => {
    
  axios.get('/api/products/getallproducts').then(res => {
    console.log(res);
    setProducts(res.data);
  }).catch(error => {
    console.log(error);
    });
    }, []);

  
  return (
    <div>
      <div className="row judtify-content-center">
       {products.length &&(products.map(product => {
        return <div key={Product._id}>

          <Product product={product}/>
        </div>
       }))}
      </div>
    </div>
  );
}
