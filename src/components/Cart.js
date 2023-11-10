import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./store/cartSlice";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="page-content">
      <h1 className="ms-3" style={{ color: "lightgrey" }}>
        Cart
      </h1>
      <div className="container">
        <div className="cart-grid">
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
