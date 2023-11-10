import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
import StoreLogo from "./images/StoreLogo.png";
import { AuthContext } from "./store/AuthContext";
import TotalPrice from "./TotalPrice";
import { useSelector } from "react-redux";

const Navigation = ({ setTotalPriceVisible }) => {
  const { state } = useContext(AuthContext);
  const itemCount = useSelector((state) => state.cart.itemCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <header
      className="nav-header"
      style={{ position: "fixed", top: "0", width: "100%" }}
    >
      <div className="container-fluid px-0">
        <Navbar bg="myGreen" style={{ width: "100%" }} expand="lg">
          <Navbar.Brand className="logo">
            <img src={StoreLogo} width="70px" height="55px" alt="Logo" />
            <span>Sports Fever</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav ms-5">
              <NavLink to="/" exact={true}>
                Home
              </NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/about">About</NavLink>
              <div className="user-display">
                {state.isLoggedIn ? (
                  <span>{`Logged in as ${state.username}`}</span>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
                <NavLink to="/cart">Cart ({itemCount})</NavLink>
              </div>
              {/* Conditionally render the TotalPrice component only in the Navbar */}
              {totalPrice !== 0 && (
                <TotalPrice
                  totalPrice={totalPrice}
                  setTotalPriceVisible={setTotalPriceVisible}
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Navigation;
