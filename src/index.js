import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/store/AuthContext"; // importing the AuthProvider component
import { Provider } from "react-redux";
import store from "./components/store/store"; // importing the store component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* BrowserRouter for handling client-side navigation */}
    <BrowserRouter>
      {/* Provider for the Redux store to manage global state */}
      <Provider store={store}>
        {/* AuthProvider for managing authentication state */}
        <AuthProvider>
          {/* Main App component */}
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
