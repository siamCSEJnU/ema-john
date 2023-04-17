import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //1.get id of the added product from db(local)
    for (const id in storedCart) {
      //2.get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //3.add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //4.add the added product to the saved cart
        savedCart.push(addedProduct);
      }
    }
    //5set the cart
    setCart(savedCart);
  }, [products]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    // console.log(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id); //pd is the product of cart arry of objects
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className="proceed-link" to="/orders">
            <button className="btn-proceed">
              Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
