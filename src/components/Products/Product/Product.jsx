import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({ id, name, description }) => {
  const value = useContext(CartContext);
console.log(value)
const [count, setCount] = useState(0)

function changevalue(e){

}
function Delete(id){

}
  return (
    <div
      data-cy="product"
      style={{
        border: "1px solid black",
        borderRadius: "12px",
        padding: "26px",
        minWidth: "200px",
      }}
    >
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      {count === 0 ? (
        <button
          data-cy="product-add-item-to-cart-button"
         onClick={()=>{

         }}
        >
          Add To Cart
        </button>
      ) : (
        <div>
          <button
            data-cy="product-increment-cart-item-count-button"
              onClick={() => changevalue(count + 1)}
          >
            +
          </button>
          <span data-cy="product-count">{count}</span>
          <button
            data-cy="product-decrement-cart-item-count-button"
              onClick={() => changevalue(count - 1)}
          >
            -
          </button>
          <button
            data-cy="product-remove-cart-item-button"
             onClick={Delete}
          >
            Remove from cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
