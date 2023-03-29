import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   const { cart } = props.cart;
  let totalPrice = 0;
  let shippingTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity===0){
    //     product.quantity=1
    // }
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    shippingTotal = shippingTotal + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + shippingTotal + tax;
  //   console.log(cart);
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : ${totalPrice.toFixed(2)}</p>
      <p>Total Shipping Charge : ${shippingTotal.toFixed(2)}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <p>
        {" "}
        <strong> Grand Total : ${grandTotal.toFixed(2)} </strong>
      </p>
    </div>
  );
};

export default Cart;
