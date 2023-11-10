import React from "react";

function TotalPrice({ totalPrice, setTotalPriceVisible }) {
  return (
    <h2 className="total-price ms-3" style={{ color: "grey" }}>
      Total price: R{totalPrice.toFixed(2)}
    </h2>
  );
}

export default TotalPrice;
