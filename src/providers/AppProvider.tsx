import { BrowserRouter } from "react-router-dom";
import React from "react";
import AuthProvider from "./AuthProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      <AuthProvider>{children}</AuthProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
