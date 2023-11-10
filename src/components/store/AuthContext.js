import React, { createContext, useContext, useReducer } from "react";

// Define the initial state
const initialState = {
  isLoggedIn: false,
  username: "",
};

// Create the context
const AuthContext = createContext(initialState);

// Define the actions
const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

// Create the reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: "",
      };
    default:
      return state;
  }
};

// Create a context provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, actionTypes };
