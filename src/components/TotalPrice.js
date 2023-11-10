import React from "react";

function TotalPrice({ totalPrice, setTotalPriceVisible }) {
  // Component displaying the total price
  return (
    // Heading displaying the total price with styling
    <h2 className="total-price ms-3" style={{ color: "grey" }}>
      {/* Displaying the total price with 'R' and 2 decimal places */}
      Total price: R{totalPrice.toFixed(2)}
    </h2>
  );
}

export default TotalPrice;
