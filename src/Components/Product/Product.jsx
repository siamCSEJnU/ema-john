import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, seller, img, price, quantity, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price : ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
