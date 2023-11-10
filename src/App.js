import { Routes, Route } from "react-router-dom"; // Importing React Router components
import Navigation from "./components/Navigation"; // Importing the Navigation component
import Home from "./components/Home"; // Importing the Home component
import About from "./components/About"; // Importing the About component
import Products from "./components/Products"; // Importing the Products component
import Login from "./components/Login";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS styles
import "./App.css";
import Registration from "./components/Registration"; // Importing the Registration component

import React, { useState } from "react";

function App() {
  // State to manage visibility of total price and the total price itself
  const [isTotalPriceVisible, setTotalPriceVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="app">
      {/* Navigation component with totalPrice and setTotalPriceVisible props */}
      <Navigation
        totalPrice={totalPrice}
        setTotalPriceVisible={isTotalPriceVisible}
      />

      {/* React Router configuration for different routes */}
      <Routes>
        <Route
          path="/products"
          element={
            <Products
              setTotalPrice={setTotalPrice}
              setTotalPriceVisible={setTotalPriceVisible}
            />
          }
        />
        {/* Route for the About component */}
        <Route path="/about" element={<About />} />
        {/* Route for the Login component */}
        <Route path="/login" element={<Login />} />
        {/* Route for the Cart component */}
        <Route path="/cart" element={<Cart />} />
        {/* Route for the Registration component */}
        <Route path="/registration" element={<Registration />} />
        {/* Default route for the Home component */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
