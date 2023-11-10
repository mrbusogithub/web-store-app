import React from "react";

function LoginError(props) {
  // A component that displays an error message within a styled div
  return <div className="error">{props.children}</div>;
}

export default LoginError;
