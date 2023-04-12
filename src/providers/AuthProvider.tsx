import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicPaths } from "../router/publicRoutes";

type AuthProviderProps = {
  children: React.ReactNode;
};

const isPublic = (path: string) => publicPaths.includes(path);
const isAuth = localStorage.getItem("user")
const AuthProvider = ({ children }: AuthProviderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    if (!isPublic(currentPath) && !isAuth) {
      return navigate("/login", {
        state: { prePath: location.pathname },
      });
    }
  }, []);

  return <div>{children}</div>;
};

export default AuthProvider;
