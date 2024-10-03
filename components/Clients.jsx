"use client";

import Link from "next/link";
import { useState, createContext, useContext } from "react";

const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const AuthButton = () => {
  const clickHandler = () => {
    alert("Logged out successfully");
  };

  const { user } = useContext(Context);

  return user.id ? (
    <button className="btn" onClick={clickHandler}>
      Logout
    </button>
  ) : (
    <Link href="/login">Login</Link>
  );
};
