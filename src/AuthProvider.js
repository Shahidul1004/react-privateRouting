import React from "react";
import { useState } from "react";
export const AuthContext = React.createContext();

const AuthProvider = ({ children, value }) => {
  const [user, setUser] = useState(false);
  const signin = (callback) => {
    setUser(true);
    callback();
  };
  const signout = (callback) => {
    setUser(false);
    callback();
  };
  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
