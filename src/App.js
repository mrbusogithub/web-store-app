import { Routes, Route } from "react-router-dom"; // Import React Router components
import Navigation from "./components/Navigation"; // Import the Navigation component
import Home from "./components/Home"; // Import the Home component
import About from "./components/About"; // Import the About component
import Products from "./components/Products"; // Import the Products component
import Login from "./components/Login";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS styles
import "./App.css";
import Registration from "./components/form-validation/Registration"; // Import the Registration component

import React, { useState } from "react";

function App() {
  const [isTotalPriceVisible, setTotalPriceVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="app">
      {/* Pass totalPrice and setTotalPriceVisible to Navigation */}
      <Navigation
        totalPrice={totalPrice}
        setTotalPriceVisible={isTotalPriceVisible}
      />

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
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
