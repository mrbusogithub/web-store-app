import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice"; // Importing the removeFromCart action
import "./Cart.css"; // Importing the Cart styling

function Cart() {
  const dispatch = useDispatch(); // To initialize the dispatch function
  const cart = useSelector((state) => state.cart.items); // Accessing the items in the cart from the Redux store

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product)); // Dispatching the removeFromCart action when removing an item
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0); // To calculate the total price of items in the cart
  };

  return (
    <div className="page-content">
      <h1 className="ms-3" style={{ color: "lightgrey" }}>
        Cart
      </h1>
      <div className="container">
        <div className="cart-grid">
          {/* Mapping through products and creating a card for each */}
          {cart.map((product) => (
            <Card key={product.id} style={{ width: "18rem", margin: "5px" }}>
              <Card.Img
                variant="top"
                src={product.image.src}
                alt={product.image.alt}
                className="custom-image"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>
                <Button onClick={() => handleRemoveFromCart(product)}>
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
