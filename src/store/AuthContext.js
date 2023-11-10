import React, { createContext, useContext, useReducer } from "react";

// To define the initial state
const initialState = {
  isLoggedIn: false,
  username: "",
};

// To create the context
const AuthContext = createContext(initialState);

// To define the actions
const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

// To create the reducer
const authReducer = (state, action) => {
  switch (action.type) {
    // Action to handle user login
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };
    // Action to handle user logout
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: "",
      };
    // Default case for unknown actions
    default:
      return state;
  }
};

// To create a context provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    // To provide the AuthContext with current state and dispatch function
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// To export AuthContext, AuthProvider, and actionTypes for external use
export { AuthContext, AuthProvider, actionTypes };
