import React from "react";

const AuthContext = React.createContext();

const AuthProvider = AuthContext.Provider;
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
