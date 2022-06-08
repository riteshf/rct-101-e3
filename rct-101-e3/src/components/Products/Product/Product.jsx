import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useParams,Navigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
const Product = () => {
  // Note: this id should come from api
const [data,setdata]=useState([]);
const [searchParams,setsearchParams]=useSearchParams();
const [page,setpage]=useState(Number(searchParams.get("page"))|| 1);

useEffect(()=>{
  setsearchParams({
    page
  });

  axios({
    url:"http://localhost:8080/products",
    method:"GET",
    params:{
      page
    }
  })
  .then((res)=>{
    setdata(res.data.data)
  })
  .catch((err)=>{});
},[page])


  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      {data.map((item)=>(
        <div key={item.id}>
          Id:{item.id}
          <div>Name:{item.name}</div>
          <div>Dis:{item.description}</div>
        </div>

        ))}
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove</button>
      </div>

    </div>
  );
};

export default Product;
